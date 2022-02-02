<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          #
        </th>
        <th scope="col">
          Category
        </th>
        <th scope="col">
          Name
        </th>
        <th
          scope="col"
          width="300"
        >
          操作
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id }}"
            class="btn btn-link"
          >Show</router-link>

          <router-link
            :to="{ name: 'admin-restaurant-edit', params: { id: restaurant.id }}"
            class="btn btn-link"
          >Edit</router-link>

          <button
            type="button"
            class="btn btn-link"
            @click.prevent.stop="deleteRestaurants(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// 模擬向API抓取的餐廳資料
const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Woodrow Schneider",
            "tel": "1-333-791-8634 x99461",
            "address": "2125 Tyrese Unions",
            "opening_hours": "08:00",
            "description": "Aspernatur labore ducimus et corporis quaerat rerum repellendus vitae. Id tempore veniam nemo eius. Repellendus minus debitis laboriosam repellat. Ea ipsam quod ducimus autem.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.008334423548217",
            "viewCounts": 1,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-27T04:56:13.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 3,
            "name": "Luna Parker",
            "tel": "985.431.7024",
            "address": "84611 Hartmann Island",
            "opening_hours": "08:00",
            "description": "Mollitia veniam alias tempore inventore vero labore. At quo ut tempora qui placeat molestiae sit. Dolore excepturi aut aut fuga. Quisquam velit dolores officia doloremque distinctio.\n \rExercitationem quia qui eum non. Aliquid neque repellendus reiciendis id molestiae suscipit et quidem earum. Doloribus doloremque rerum. Sunt eius et ullam. Nisi itaque reiciendis provident ut amet occaecati ut.\n \rLaudantium sit libero est corrupti ut. Iste omnis soluta facilis cum reiciendis laudantium. Nulla eaque nostrum. Culpa quo et incidunt cupiditate temporibus.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=75.26687670207501",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 10,
            "name": "Carleton Swaniawski",
            "tel": "916.198.3948",
            "address": "96026 Pagac Pines",
            "opening_hours": "08:00",
            "description": "Deserunt sint nisi cumque in possimus minus quia. Recusandae quis enim officiis rerum. Rerum delectus ipsa rerum quam quas. Quia rerum placeat. Qui non ut dolorem sunt. Non rerum culpa sed occaecati odit alias dolor.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=6.741648075153517",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 13,
            "name": "Rylan Waelchi",
            "tel": "1-868-777-7467",
            "address": "8115 Wehner Squares",
            "opening_hours": "08:00",
            "description": "Accusamus aspernatur ut et fugit.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.480608705465333",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 29,
            "name": "Ellen Schuster",
            "tel": "737-550-3697 x50747",
            "address": "88474 Esmeralda Mission",
            "opening_hours": "08:00",
            "description": "Modi distinctio in cum commodi ut enim. Dolorem nesciunt rerum. A vero vero nam in nisi excepturi et.\n \rRepellat consequatur in omnis doloremque earum id alias repudiandae dolorem. Vitae voluptas amet. Voluptatem nesciunt et aliquam deserunt cupiditate quis doloremque et. Aut nihil rerum voluptas tenetur est. Aut laborum aspernatur nam culpa accusantium soluta aut laudantium. Sed esse tenetur.\n \rCorrupti sed molestiae est odit. Incidunt eveniet blanditiis voluptate vero. Recusandae labore cumque ea dignissimos. Quaerat harum officiis earum repellendus rerum quae expedita consectetur a. Tenetur sint consequatur ex expedita et sunt necessitatibus quia cum. Delectus in delectus hic voluptas.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=46.29021131721851",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 40,
            "name": "Miss Jana Russel",
            "tel": "1-974-234-0972 x0653",
            "address": "535 Batz Haven",
            "opening_hours": "08:00",
            "description": "aut dignissimos quisquam",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=90.15892282845664",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 41,
            "name": "Yoshiko Morissette",
            "tel": "(802) 350-1771",
            "address": "42757 Bernadine Ramp",
            "opening_hours": "08:00",
            "description": "Autem corporis libero magni mollitia totam ut quisquam unde. Et iste sunt omnis consectetur tenetur quas. Soluta eos numquam cumque ab tempore enim mollitia. Accusantium dolores maxime omnis repellendus et libero rerum. Sint doloremque explicabo maiores quia iure enim. Libero architecto qui itaque sint quas.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=56.19779215201817",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 43,
            "name": "Mr. Lindsay Ryan",
            "tel": "190.723.5975 x14605",
            "address": "53220 Homenick Plaza",
            "opening_hours": "08:00",
            "description": "Ipsum consequatur non quia esse quam voluptatem placeat. Autem ut id velit magnam veniam quidem ipsum ipsa odio. Error quidem quasi suscipit rerum. Nemo odit tempore consectetur.\n \rEt accusantium sunt quaerat commodi praesentium. Officia autem esse cum dolorem. Placeat rerum similique consequatur nisi dolor quo quae. Vitae fugiat architecto optio sapiente vel quidem perferendis deserunt quae. Odio eius aperiam.\n \rVeniam omnis cupiditate qui corrupti adipisci. Suscipit voluptatem placeat aut consectetur quam porro et. Facilis enim explicabo labore voluptas hic tenetur. Explicabo laboriosam sed eum fugiat qui corporis et officia.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=99.20164706190151",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 44,
            "name": "Verner Runolfsson",
            "tel": "313-712-3514 x022",
            "address": "074 Nelle Stream",
            "opening_hours": "08:00",
            "description": "Officiis natus modi consequatur non corporis quos sit quibusdam dolor.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=45.98537160535421",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 46,
            "name": "Abdullah Berge",
            "tel": "473.907.1761",
            "address": "342 Bailey Point",
            "opening_hours": "08:00",
            "description": "Veniam voluptatem et. Deserunt consequatur sint rem velit. A eos sapiente ut eum. Commodi incidunt fugit et ipsum itaque dignissimos et. Dolor et expedita asperiores. Quidem quo laboriosam molestiae velit rerum.\n \rEa possimus ut distinctio exercitationem saepe. Qui nihil facere molestiae repellendus distinctio molestias facere nisi. Vitae ut modi quam aliquam cum cupiditate commodi ipsa. Vero officia laboriosam voluptatem et ab repellendus dolores occaecati. Tenetur numquam non ipsum laborum animi libero voluptatibus.\n \rEnim distinctio repudiandae iure maxime velit eum eum voluptatem suscipit. Reprehenderit officiis sunt non aut rerum ut. Iste non deleniti qui ipsa nihil libero saepe placeat. Enim vero veritatis architecto eum itaque nesciunt explicabo modi. Excepturi commodi et est et soluta omnis tempora quis. Rerum quia officia eum dolorem.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=5.094317897788381",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 47,
            "name": "Savannah Braun DDS",
            "tel": "1-561-885-6048",
            "address": "48341 Aufderhar Locks",
            "opening_hours": "08:00",
            "description": "et voluptates occaecati",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.68209474940767",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 8,
            "name": "Arianna Hudson",
            "tel": "362-130-0355 x38939",
            "address": "40753 Astrid Glens",
            "opening_hours": "08:00",
            "description": "Sit possimus neque commodi ullam sint accusamus consequuntur aut. Deserunt et voluptas. Qui dolorem possimus alias vel. Aut architecto earum et aut quos veritatis mollitia et reprehenderit. Vero tempore quo. Perspiciatis a aut et labore impedit reprehenderit.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.371200569081438",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 20,
            "name": "Kristy Herzog",
            "tel": "663.082.3987 x911",
            "address": "860 Jadyn Lake",
            "opening_hours": "08:00",
            "description": "Et eaque iure. Veniam magnam eos et esse iure numquam soluta neque. Iste ea molestiae sequi sit.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=17.252490477825887",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 24,
            "name": "Luz Predovic",
            "tel": "759.974.5030 x78822",
            "address": "78395 Rafael Roads",
            "opening_hours": "08:00",
            "description": "Autem veritatis deleniti labore ut. Sit voluptas in et voluptas modi ad eum fuga rerum. Nulla minima ex. Quidem qui adipisci omnis illo tempora rem. Non ipsa illo.\n \rCommodi possimus beatae est iusto. Voluptatibus consequatur sed nostrum eum qui eos facere alias sint. Ut vel consequatur itaque laudantium. Quas esse quia dicta. Sit est aperiam impedit in culpa exercitationem quis laboriosam.\n \rLabore architecto iste molestiae. Minima voluptatibus et mollitia. Consequuntur corporis praesentium aut dolore.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=44.41134943047702",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 26,
            "name": "Florida Mohr",
            "tel": "1-767-353-0787 x48107",
            "address": "82585 Runte Hills",
            "opening_hours": "08:00",
            "description": "quia",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=83.20235144474088",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 27,
            "name": "Kaden Zieme",
            "tel": "1-391-606-8456",
            "address": "2115 Waldo Glens",
            "opening_hours": "08:00",
            "description": "autem",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.258011728781206",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 37,
            "name": "Modesta Hahn",
            "tel": "1-551-309-8413 x11128",
            "address": "77428 Chesley Lights",
            "opening_hours": "08:00",
            "description": "Ab earum quia velit nesciunt autem quia. Ipsum recusandae vitae iste commodi et quos temporibus.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=70.30748273085021",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 42,
            "name": "Mrs. Reanna McGlynn",
            "tel": "1-185-745-8197 x779",
            "address": "693 Willms Turnpike",
            "opening_hours": "08:00",
            "description": "consequatur quo quidem",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.51451645148428",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 45,
            "name": "Leonardo Moore",
            "tel": "1-735-855-6741",
            "address": "211 Candice Hill",
            "opening_hours": "08:00",
            "description": "et",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=38.93828421622854",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 6,
            "name": "Ramon Zieme",
            "tel": "267.344.9786 x249",
            "address": "49040 Einar Row",
            "opening_hours": "08:00",
            "description": "Magni libero et ab tempora omnis. Odio delectus ipsam error non aliquam consectetur et modi. Dolor qui rerum nihil quos.\n \rEnim qui quod sint quo. Exercitationem voluptas officia officia mollitia aliquam blanditiis non maiores. Fugiat sapiente voluptatem placeat. Ut molestiae voluptatibus ratione odio ea et nihil esse. Enim aut harum officiis expedita esse et non sequi in. Vitae molestiae quo omnis doloribus qui iste quo repellendus.\n \rCorrupti earum libero provident porro sit facilis. Eveniet iure sunt possimus non quis iste eum quia similique. Labore quam voluptatem quos.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=26.39866593182223",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 16,
            "name": "Dr. Nathanael Toy",
            "tel": "187.087.9205",
            "address": "27287 Rippin Glens",
            "opening_hours": "08:00",
            "description": "quod ut veritatis",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.115948972169022",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 22,
            "name": "Myron Upton",
            "tel": "231-376-3333 x496",
            "address": "40194 Jovany Crossing",
            "opening_hours": "08:00",
            "description": "Sint similique aut accusantium ipsum ut dolore.\nPlaceat voluptatibus harum.\nRatione dolorem qui id sapiente explicabo.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=45.938075463060144",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 23,
            "name": "Retta Hansen",
            "tel": "465-400-2423 x08182",
            "address": "3600 Alphonso Park",
            "opening_hours": "08:00",
            "description": "Hic quia consectetur commodi nam iste ut. Excepturi voluptatem non atque eos. Et quaerat perferendis laudantium cumque. Quia fugiat qui nisi.\n \rEveniet eum vel voluptatem et voluptatem quia est. Qui nisi soluta vitae et nam ex accusamus sit. Dolor officia et. Minus facilis nihil quod sed quod voluptas architecto.\n \rDucimus quod recusandae necessitatibus. Excepturi expedita nesciunt culpa cum provident rem explicabo natus. Voluptates sapiente expedita. Ea dolor fuga dolores natus nisi aut. Quis totam veritatis quibusdam iste. Non dolore maxime architecto quis in ratione voluptatibus quia ab.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=5.823980725797839",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 48,
            "name": "Ms. Christa Purdy",
            "tel": "(219) 536-0819",
            "address": "0762 Bruen Throughway",
            "opening_hours": "08:00",
            "description": "sed dolores ex",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=41.1523663347304",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 49,
            "name": "Miss Fabian Terry",
            "tel": "474-399-3435 x389",
            "address": "4875 Chanelle Skyway",
            "opening_hours": "08:00",
            "description": "Quia nihil voluptas voluptate adipisci.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=56.4503255498275",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 2,
            "name": "Major Bechtelar",
            "tel": "1-966-146-5470 x92471",
            "address": "746 Scot Drive",
            "opening_hours": "08:00",
            "description": "odio",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=32.49389388411667",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 4,
            "name": "Jerry Stroman",
            "tel": "1-208-101-4010",
            "address": "507 Greta Corner",
            "opening_hours": "08:00",
            "description": "Velit exercitationem qui et excepturi laborum eum qui. Rerum sunt ipsum. Porro quo cupiditate laborum libero.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=44.66189950102881",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 5,
            "name": "Dameon Schaden V",
            "tel": "889.321.6625 x18716",
            "address": "28862 Shaylee Island",
            "opening_hours": "08:00",
            "description": "Aut in ea nostrum.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=41.57612115358316",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 7,
            "name": "Delta Olson",
            "tel": "1-565-662-8165 x7992",
            "address": "72963 Bechtelar Extensions",
            "opening_hours": "08:00",
            "description": "quo",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=76.40228253834927",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 9,
            "name": "Bonnie Schimmel",
            "tel": "690-779-9261 x21884",
            "address": "46654 Orval Forest",
            "opening_hours": "08:00",
            "description": "Dolore maiores dolor ut laborum a et et.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=81.6081388778392",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 11,
            "name": "Mr. Miles Bartoletti",
            "tel": "181.136.8640 x474",
            "address": "42573 Kiarra Gardens",
            "opening_hours": "08:00",
            "description": "Possimus quod quo dignissimos eveniet similique sit asperiores.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=93.05227957169583",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 14,
            "name": "Zola Rippin DVM",
            "tel": "316.251.8175 x157",
            "address": "3470 Keebler Road",
            "opening_hours": "08:00",
            "description": "Itaque in exercitationem rerum voluptatem ratione dolores et.\nQui in laborum eaque.\nEarum reiciendis et adipisci voluptas.\nVoluptatum aut sit ut sunt et autem sit recusandae vitae.\nProvident recusandae soluta itaque.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=53.78934818317036",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 17,
            "name": "Stephon Turcotte",
            "tel": "221-238-7821",
            "address": "78646 Madyson Summit",
            "opening_hours": "08:00",
            "description": "Excepturi ullam occaecati.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=65.19297290664178",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 19,
            "name": "German Dietrich",
            "tel": "277.757.0639 x2624",
            "address": "41822 Colleen Place",
            "opening_hours": "08:00",
            "description": "Eum optio placeat qui suscipit fugiat adipisci est nisi nemo. Illo veniam ipsam dolorem veritatis nemo rerum eum. Dolor eius asperiores dolor labore sequi molestiae.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.55668416037106",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 31,
            "name": "Ms. Fern Pollich",
            "tel": "663-369-3768",
            "address": "204 Feeney Station",
            "opening_hours": "08:00",
            "description": "Iure explicabo et. Voluptas consequatur repudiandae animi facere voluptatem nihil ratione qui aut. Consectetur dicta mollitia qui officia voluptatem soluta dolorem qui et. Et eius quo aliquam.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=91.1717440335799",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 32,
            "name": "Oswaldo Walker",
            "tel": "786-038-0032 x3032",
            "address": "827 Langworth Fort",
            "opening_hours": "08:00",
            "description": "Perspiciatis distinctio veritatis. Quod similique est corrupti. Voluptatibus velit amet veniam expedita quo illum incidunt. Mollitia consequuntur est.\n \rDoloribus exercitationem quidem qui quam iusto velit aspernatur facere atque. Doloribus vitae molestias quibusdam voluptas quas non. Voluptates explicabo aut necessitatibus nobis. Qui fugit saepe nulla nesciunt autem ea repellendus. Corporis exercitationem soluta ea eius optio qui qui dolores.\n \rUt omnis ex molestiae accusantium totam officia temporibus officia. Aut voluptas recusandae voluptatem. Nemo adipisci ratione deserunt et eaque rerum explicabo tempore accusantium. Aliquid veritatis odit commodi eius laborum maxime. Ut rerum dolor alias quaerat modi.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=73.20636399304811",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 33,
            "name": "Crystal Boehm",
            "tel": "1-807-321-3470 x944",
            "address": "266 Walker Row",
            "opening_hours": "08:00",
            "description": "Totam eum nam eos aspernatur ea minima modi praesentium. Incidunt qui eius est ea inventore omnis quisquam delectus. Quaerat quod sed.\n \rPerspiciatis quidem debitis et recusandae suscipit necessitatibus in ut. Eius voluptatem ratione. Aut occaecati quaerat ratione fugit. Molestiae est quam optio quo et quas.\n \rDolorem rerum blanditiis dolores. In et magni incidunt nostrum. Optio aliquid praesentium ut nesciunt eaque aut. Accusamus dolores ea quibusdam ea maiores magnam ipsa autem. Est sit totam non.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=59.11578350973152",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 38,
            "name": "Sonya Abshire",
            "tel": "967.173.0908",
            "address": "3486 Legros Fork",
            "opening_hours": "08:00",
            "description": "minima aut sit",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=53.68167701145252",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 39,
            "name": "General Wolf",
            "tel": "1-948-942-4730 x074",
            "address": "1820 Spencer Stream",
            "opening_hours": "08:00",
            "description": "Quaerat consequatur modi alias modi unde quidem eveniet. Autem voluptatem minima. Amet voluptatem iste voluptas aut exercitationem qui voluptatem sit. Aut sunt exercitationem nihil vel quo quibusdam quibusdam. Veritatis aut tempore optio qui ducimus non nam nam. Sunt dolor excepturi et voluptatem eum.\n \rMollitia voluptates nostrum qui soluta consequuntur optio. Perspiciatis pariatur numquam ab sint commodi dolorum non. Repudiandae asperiores eveniet ad tenetur. Labore animi enim ut sint eos explicabo vero. Nihil et ullam sint. Dolorem cupiditate ea iure officia itaque veniam.\n \rSapiente quo aut incidunt eius rem doloribus aperiam debitis magnam. Dolor quia earum sunt aut. Sed rerum et odio ab. Libero aut tenetur aut et ut. Aliquam quidem deserunt exercitationem. Molestiae officia voluptatem similique aut omnis harum sit.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=86.6542217960391",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 50,
            "name": "Remington Abshire",
            "tel": "(785) 164-6045 x64688",
            "address": "8828 Goyette Extension",
            "opening_hours": "08:00",
            "description": "Minima dolores eaque earum ratione. Cum nemo architecto. Error dolores ut magni accusamus qui.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.119813074760934",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 12,
            "name": "Archibald Koepp",
            "tel": "901-934-6479",
            "address": "13598 Rubie Mission",
            "opening_hours": "08:00",
            "description": "Reprehenderit blanditiis cupiditate fugit porro quis eum consequuntur. Vero sequi magni enim et. Tenetur officiis facilis et. Ab quia ut asperiores rerum voluptatem commodi. Repellat et aut rerum voluptatum ad quibusdam. At ab numquam ut architecto error id ipsum adipisci facere.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=89.12553491534692",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 15,
            "name": "Sadie Kutch",
            "tel": "646.150.5561 x857",
            "address": "0188 Rippin Vista",
            "opening_hours": "08:00",
            "description": "alias",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=56.22478307341146",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 18,
            "name": "Savion Heaney",
            "tel": "(819) 731-4681 x7880",
            "address": "297 Harris Turnpike",
            "opening_hours": "08:00",
            "description": "perferendis",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=77.92140245161421",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 21,
            "name": "Jayde Kulas",
            "tel": "595.043.1586",
            "address": "108 Koepp Heights",
            "opening_hours": "08:00",
            "description": "Itaque expedita velit aut inventore labore aut.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=59.76527917240728",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 25,
            "name": "Sabrina Kub",
            "tel": "118.088.8913",
            "address": "138 Lemke Hill",
            "opening_hours": "08:00",
            "description": "Natus libero quisquam debitis quia incidunt ex.\nConsequuntur sequi suscipit quaerat quia nobis tempora repudiandae et nihil.\nQuia qui voluptatem autem.\nNon quae iure ducimus voluptas.\nEt repellat architecto numquam consectetur in et sed cupiditate.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=12.758045099194781",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 28,
            "name": "Paolo Miller",
            "tel": "341-332-9719",
            "address": "833 Yasmine Junction",
            "opening_hours": "08:00",
            "description": "laudantium aut rerum",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=83.53932780986966",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 30,
            "name": "Joaquin Weissnat",
            "tel": "(760) 269-9948",
            "address": "74286 Macejkovic Cliff",
            "opening_hours": "08:00",
            "description": "Accusamus ut sapiente unde quas rerum est ut a sint.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=5.612306037945736",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 34,
            "name": "Helmer Effertz",
            "tel": "(159) 159-7850 x9217",
            "address": "08764 Haley Track",
            "opening_hours": "08:00",
            "description": "Eveniet enim rerum consectetur. Aliquam laboriosam rem temporibus itaque. Ut et similique eveniet. Quam sequi debitis sequi ab similique.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=26.289730531066446",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 35,
            "name": "Tyrel Ryan",
            "tel": "813.606.9587",
            "address": "07413 Frankie Road",
            "opening_hours": "08:00",
            "description": "Laborum et qui sit est ipsa beatae quia error.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=86.87962749565365",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        },
        {
            "id": 36,
            "name": "Chadd Crist",
            "tel": "(922) 737-1654 x53183",
            "address": "26452 Jast Squares",
            "opening_hours": "08:00",
            "description": "Consequuntur et rerum officiis vel voluptatem molestias minus suscipit quo. Modi voluptatem officiis quae reiciendis quis neque non voluptatem. Architecto pariatur aperiam necessitatibus iusto. Doloremque cumque beatae omnis atque non. Rerum praesentium voluptate amet dolore sit voluptatem qui. Impedit porro a perspiciatis tempore laboriosam libero.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=49.41839400148182",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            }
        }
    ]
}

export default {
  name: 'AdminRestaurantsTable',
  data() {
    return {
      // 建立餐廳初始資料
      restaurants: []
    }
  },
  created() {
    this.fetchAdminRestaurants()
  },
  methods: {
    fetchAdminRestaurants() {
      // TODO: 向API抓取adminRestaurants的資料

      this.restaurants = dummyData.restaurants
    },
    deleteRestaurants(restaurantId) {
        this.restaurants = this.restaurants.filter( restaurant => restaurant.id !== restaurantId )
    }
  }
}
</script>