<template>
  <div>
    <Spinner v-if="isLoading" />
    <div v-else class="container py-5">
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
              :disabled="isProcessing"
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
  </div>
</template>

<script>
// 載入AdminNav component
import AdminNav from '../components/AdminNav'
import adminAPI from '../apis/admin'
import { Toast } from '../utils/helpers'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'AdminCategories',
  components: {
    AdminNav,
    Spinner
  },
  data () {
    return {
      categories: [],
      newCategoryName: '',
      isProcessing: false,
      isLoading: true
    }
  },
  created () {
    this.fetchCategories()
  },
  methods: {
    // 向伺服器取得餐廳目錄的函式
    async fetchCategories () {
      try {
        const { data } = await adminAPI.categories.get()
        console.log(data)
        this.categories = data.categories.map( category => ({
        ...category,
        isEditing: false,
        nameCached: ''
      }))
      this.isLoading = false
      } catch(error) {
        console.log('error', error)
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳目錄，請稍後再試'
        })
      }
    },
    // 新增餐廳類別的函式
    async createCategory() {
      try {
        // 當輸入值為空白時，無法輸入
        if (!this.newCategoryName.trim()) return

        // 防止使用者多次點擊新增按鈕，進而導致一次新增多筆同樣的餐廳類別
        this.isProcessing = true
        
        // 透過API新增餐廳類別
        const { data } = await adminAPI.categories.create({
          name: this.newCategoryName
        })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        // 將新增的餐廳類別加入categorires中
        this.categories.push({
          id: data.categoryId,
          name: this.newCategoryName,
          isEditing: false
        })

        // 將newCategoryName清空
        this.newCategoryName = ''

        // 新增餐廳類別完成之後，將新增按鈕的disabled解開
        this.isProcessing = false
      } catch(error) {
        console.log('error', error)

        // 當進入錯誤狀態時，要將新增按鈕的disabled解開
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法新增餐廳類別，請稍後再試'
        })
      }
    },
    // 移除餐廳類別的函式
    async deleteCategory(categoryId) {
      try {
        // 透過API移除餐廳類別
        const { data } = await adminAPI.categories.delete(categoryId)

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.categories = this.categories.filter( category => category.id !== categoryId)
      } catch(error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法移除餐廳類別，請稍後再試'
        })
      }
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
    async updateCategory ({ categoryId, name }) {
      try {
        console.log(name)
        // 當修改的餐廳類別名稱為空白時，無法修改
        if (!name.trim()) return

        // 透過API修改餐廳類別
        const { data } = await adminAPI.categories.update({ 
          categoryId,
          name
        })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

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
      } catch(error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法修改餐廳類別，請稍後再試'
        })
      }
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