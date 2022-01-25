<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
      </div>
    </div>
  </div>
</template>

<script>
// 載入NavTabs component
import NavTabs from '../components/NavTabs.vue'
import NewestRestaurants from '../components/NewestRestaurants.vue'

// 建立假的API資料
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
        }
    ],
    "comments": [
        {
            "id": 4,
            "text": "Rerum enim dolor.",
            "UserId": 1,
            "RestaurantId": 4,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$JQvqoUJFVaBalCiinUSTs.2J36IkrUcLdwIopXkGtpPDCp51HM4/G",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-01-23T10:09:29.000Z",
                "updatedAt": "2022-01-23T10:09:29.000Z"
            },
            "Restaurant": {
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
                "CategoryId": 4
            }
        },
        {
            "id": 20,
            "text": "Nihil quia sed magnam.",
            "UserId": 1,
            "RestaurantId": 20,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$JQvqoUJFVaBalCiinUSTs.2J36IkrUcLdwIopXkGtpPDCp51HM4/G",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-01-23T10:09:29.000Z",
                "updatedAt": "2022-01-23T10:09:29.000Z"
            },
            "Restaurant": {
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
                "CategoryId": 2
            }
        },
        {
            "id": 34,
            "text": "Quis accusantium cum veniam minima ea optio.",
            "UserId": 1,
            "RestaurantId": 34,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$JQvqoUJFVaBalCiinUSTs.2J36IkrUcLdwIopXkGtpPDCp51HM4/G",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-01-23T10:09:29.000Z",
                "updatedAt": "2022-01-23T10:09:29.000Z"
            },
            "Restaurant": {
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
                "CategoryId": 5
            }
        },
        {
            "id": 63,
            "text": "Blanditiis aut incidunt ut.",
            "UserId": 1,
            "RestaurantId": 13,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$JQvqoUJFVaBalCiinUSTs.2J36IkrUcLdwIopXkGtpPDCp51HM4/G",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-01-23T10:09:29.000Z",
                "updatedAt": "2022-01-23T10:09:29.000Z"
            },
            "Restaurant": {
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
                "CategoryId": 1
            }
        },
        {
            "id": 87,
            "text": "Aut veritatis quae provident expedita dicta sint occaecati pariatur.",
            "UserId": 1,
            "RestaurantId": 37,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$JQvqoUJFVaBalCiinUSTs.2J36IkrUcLdwIopXkGtpPDCp51HM4/G",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-01-23T10:09:29.000Z",
                "updatedAt": "2022-01-23T10:09:29.000Z"
            },
            "Restaurant": {
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
                "CategoryId": 2
            }
        },
        {
            "id": 108,
            "text": "Aut corrupti facere quaerat nobis.",
            "UserId": 1,
            "RestaurantId": 8,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$JQvqoUJFVaBalCiinUSTs.2J36IkrUcLdwIopXkGtpPDCp51HM4/G",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-01-23T10:09:29.000Z",
                "updatedAt": "2022-01-23T10:09:29.000Z"
            },
            "Restaurant": {
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
                "CategoryId": 2
            }
        },
        {
            "id": 129,
            "text": "Impedit aut voluptatem nam eos.",
            "UserId": 1,
            "RestaurantId": 29,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$JQvqoUJFVaBalCiinUSTs.2J36IkrUcLdwIopXkGtpPDCp51HM4/G",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-01-23T10:09:29.000Z",
                "updatedAt": "2022-01-23T10:09:29.000Z"
            },
            "Restaurant": {
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
                "CategoryId": 1
            }
        },
        {
            "id": 147,
            "text": "Quo rerum eligendi asperiores aperiam ad et.",
            "UserId": 1,
            "RestaurantId": 47,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$JQvqoUJFVaBalCiinUSTs.2J36IkrUcLdwIopXkGtpPDCp51HM4/G",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-01-23T10:09:29.000Z",
                "updatedAt": "2022-01-23T10:09:29.000Z"
            },
            "Restaurant": {
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
                "CategoryId": 1
            }
        },
        {
            "id": 38,
            "text": "Quod debitis voluptate ad quo culpa consectetur earum sunt nisi.",
            "UserId": 2,
            "RestaurantId": 38,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$qjW2eJJ5XZSlDB7NCbjur.m6/vbT3SSPoc8L837FpwuswCMcHiTBS",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            },
            "Restaurant": {
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
                "CategoryId": 4
            }
        },
        {
            "id": 60,
            "text": "Praesentium vel non.",
            "UserId": 2,
            "RestaurantId": 10,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$qjW2eJJ5XZSlDB7NCbjur.m6/vbT3SSPoc8L837FpwuswCMcHiTBS",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            },
            "Restaurant": {
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
                "CategoryId": 1
            }
        }
    ]
}

export default {
  components: {
    NavTabs,
    NewestRestaurants
  },
  // 初始資料
  data() {
    return {
      restaurants: [],
      comments: []
    }
  },
  created() {
    this.fetchFeeds()
  },
  methods: {
    // 將API資料放入data
    fetchFeeds() {
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments
    }
  }
}
</script>