<template>
  <div class="container py-5">
     <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input
            type="text"
            class="form-control"
            placeholder="新增餐廳類別..."
            v-model="newCategoryName"
          >
        </div>
        <div class="col-auto">
          <button
            type="button"
            class="btn btn-primary"
            @click.prevent.stop="createCategory"
          >
            新增
          </button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th
            scope="col"
            width="60"
          >
            #
          </th>
          <th scope="col">
            Category Name
          </th>
          <th
            scope="col"
            width="210"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
      v-for="category in categories"
      :key="category.id"
    >
     <th scope="row">
      {{ category.id }}
     </th>
        <td class="position-relative">
          <div
            v-show="!category.isEditing"
            class="category-name"
          >
            {{ category.name }}
          </div>
          <input
            v-show="category.isEditing"
            v-model="category.name"
            type="text"
            class="form-control"
          >
          <span
            v-show="category.isEditing"
            class="cancel"
            @click="handleCancel(category.id)"
          >
            ✕
          </span>
        </td>
        <td class="d-flex justify-content-between">
          <button
            v-show="!category.isEditing"
            type="button"
            class="btn btn-link mr-2"
            @click.stop.prevent="toggleIsEditing(category.id)"
          >
            Edit
          </button>
          <button
            v-show="category.isEditing"
            type="button"
            class="btn btn-link mr-2"
            @click.stop.prevent="updateCategory({ categoryId: category.id, name: category.name })"
          >
            Save
          </button>
          <button
            type="button"
            class="btn btn-link mr-2"
            @click.stop.prevent="deleteCategory(category.id)"
          >
            Delete
          </button>
        </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// 載入AdminNav component
import AdminNav from '../components/AdminNav'
// 載入uuid
import {v4 as uuidv4} from 'uuid'

//  模擬向API抓取餐廳類別的資料
const dummyData = {
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z"
        }
    ]
}

export default {
  name: 'AdminCategories',
  components: {
    AdminNav
  },
  // 3. 定義 Vue 中使用的 data 資料
  data () {
    return {
      categories: [],
      newCategoryName: ''
    }
  },
  // 5. 調用 `fetchCategories` 方法
  created () {
    this.fetchCategories()
  },
  methods: {
    // 4. 定義 `fetchCategories` 方法，把 `dummyData` 帶入 Vue 物件
    fetchCategories () {
      this.categories = dummyData.categories.map( category => ({
        ...category,
        isEditing: false,
        nameCached: ''
      }))
    },
    createCategory() {
      // TODO: 向API新增新的餐廳類別

      // 當輸入值為空白時，無法輸入
      if (!this.newCategoryName.trim()) return

      // 將新增的餐廳類別加入categorires中
      this.categories.push({
        id: uuidv4(),
        name: this.newCategoryName
      })

      // 將newCategoryName清空
      this.newCategoryName = ''
    },
    deleteCategory(categoryId) {
      this.categories = this.categories.filter( category => category.id !== categoryId)
    },
    // 切換isEditing狀態的函式
    toggleIsEditing (categoryId) {
      // 利用map回傳改變之後的陣列
      this.categories = this.categories.map(category => {
        // 當category.id等於categoryId時
        // 將isEditing的狀態做true/false交換
        if (category.id === categoryId) {
          return {
            ...category,
            isEditing: !category.isEditing,
            nameCached: category.name
          }
        }

        // 如果category.id不等於categoryId時
        // 則直接回傳原本的category
        return category
      })
    },
    // 修改餐廳類別名稱的函式
    updateCategory ({ categoryId, name }) {
      // TODO: 透過 API 去向伺服器更新餐廳類別名稱

      // 當修改的餐廳類別名稱為空白時，無法修改
      if (!name.trim()) return

      this.categories = this.categories.map( category => {
        // 當category.id等於categoryId時
        // 將輸入的餐廳類別名稱放回餐廳類別中
        if (category.id === categoryId) {
          return {
            ...category,
            name,
          }
        }

        // 如果category.id不等於categoryId時
        // 則直接回傳原本的category
        return category
      })

      // 修改完成餐廳類別名稱後，再將isEditing狀態更改回原本的狀態
      this.toggleIsEditing(categoryId)
    },
    // 取消修改餐廳類別名稱的函式
    handleCancel (categoryId) {
      this.categories = this.categories.map(category => {
        // 當category.id等於categoryId時
        // 將原本餐廳類別的名稱放回去
        if (category.id === categoryId) {
          return {
            ...category,
            name: category.nameCached
          }
        }

        // 如果category.id不等於categoryId時
        // 則直接回傳原本的category
        return category
      })

      // 取消修改餐廳類別名稱後，再將isEditing狀態更改回原本的狀態
      this.toggleIsEditing(categoryId)
    }
  }
}
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>