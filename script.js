let arr = [
    {
        name: "book1",
        link:"book/1.jpg",
        description: "Біблія",
        const:"1000₴",
        category: 1
    },
    {
        name: "book2",
        link: "book/2.jpg",
        description: "Люби Бога всією думкою своєю",
        const:"300₴",
        category: 1
    },
    {
        name: "book3",
        link: "book/3.jpg",
        description: "Життя з метою",
        const:"450₴",
        category: 1
    },
    {
        name: "book4",
        link: "book/4.jpg",
        description: "Оновлюючись день у день",
        const:"250₴",
        category: 1
    },
    
    {
        name: "book5",
        link: "book/5.jpg",
        description: "Книга мучеников",
        const:"700₴",
        category: 1
    },
    {
        name: "book6",
        link: "book/6.jpg",
        description: "Сила слова",
        const:"750₴",
        category: 1
    },
    {
        name: "book7",
        link: "book/7.jpg",
        description: "Любов діє",
        const:"850₴",
        category: 1
    },
     {
        name: "book8",
        link: "book/8.jpg",
        description: "Що ми знаємо про небо",
        const:"450₴",
        category: 1
    },
     {
        name: "book9",
        link: "book/9.jpg",
        description: "Біблія",
        const:"930₴",
        category: 1
    },
        {
        name: "book10",
        link: "book/15.jpg",
        description: "Історія української кухні",
        const:"750₴",
        category: 2
    },
       {
        name: "book11",
        link: "book/14.jpg",
        description: "Історія книги",
        const:"450₴",
        category: 2
        
    },
        {
        name: "book12",
        link: "book/16.jpg",
        description: "Хіросіма",
        const:"660₴",
        category: 2
    },
        {
        name: "book13",
        link: "book/13.jpg",
        description: "Історія мистецтвa",
        const:"880₴",
        category: 2
    },
        {
        name: "book14",
        link: "book/11.jpg",
        description: "Глобальна історія України",
        const:"550₴",
        category: 2
    },
        {
        name: "book15",
        link: "book/10.jpg",
        description: "Історія світу ",
        const:"500₴",
        category: 2
    },
        {
        name: "book16",
        link: "book/12.jpg",
        description: " Історія економіки",
        const:"740₴",
        category: 2
    },
        {
        name: "book17",
        link: "book/17.jpg",
        description: "Сепед дикунуків Нової-Гвінеї",
        const:"600₴",
        category: 3
    },
        {
        name: "book18",
        link: "book/23.jpg",
        description: "Морські історії ",
        const:"300₴",
        category: 3
    },
    {
        name: "book19",
        link: "book/24.jpg",
        description: "Заповідне лісознавство",
        const:"260₴",
        category: 3
    },
    {
        name: "book20",
        link: "book/20.jpg",
        description: "Екзотичні дерева,кущі та ліани в ландшафтах України",
        const:"500₴",
        category: 3
    },
    {
        name: "book21",
        link: "book/21.jpg",
        description: "Розповідь про тварин та їх назви",
        const:"400₴",
        category: 3
    },
    {
        name: "book22",
        link: "book/19.jpg",
        description: "Пташина історія ",
        const:"250₴",
        category: 3
    },
    {
        name: "book6",
        link: "book/23.jpg",
        description: "Біологія поведінки",
        const:"200₴",
        category: 3
    },
    {
        name: "book6",
        link: "book/24.jpg",
        description: "Довідник майстра лісу ",
        const:"280₴",
        category: 3
    },
];

    let cookie = "user subscribed";

function getElements(category) {
        let container = document.querySelector("#container");
        let out = "<div class='row'>";
        let i = 0;
        arr.forEach(elem => {
      
          if(category == null || category == elem.category){
            out += "<div id='div-row' class='col-sm-4'><img alt='' src='" +elem.link +
            "' class='img-thumbnail img-fluid hoverable'title='" +elem.name + 
            "'><p class='description'>"+ elem.description+"</p><p class='const'>"+elem.const+
            "</p><button class='r'>В кошик</button></div>";
            i = i + 1;
          }
          
          if(i % 3 == 0){
            out += "</div><div class='row'>";
          }
      
        });
        out += "</div>"
        container.innerHTML = out;
      }
      let modal = document.getElementById("mymodal");
      let closeBtn = document.querySelector("#closeBtn");
      function close() {
          modal.style.display = "none";
      }
      
      setTimeout(() => {
          if (document.cookie != cookie) {
              modal.style.display = "block";
      
          }
      }, 3000)
      
      let closeTime = 5;
      
      setInterval(() => {
          if (modal.style.display == "block" && closeTime > 0) {
              closeTime -= 1;
              closeBtn.innerHTML = closeTime + " seconds";
          } else if(closeTime <= 0){
              closeBtn.innerHTML = "&times;";
              closeBtn.addEventListener("click", close);
          }
      }, 1000)
      
      
      function subscribe() {
          document.cookie = cookie;
          close();}
      