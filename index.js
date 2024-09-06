// // interporation

// //Dom javascript
// const name1 = " Mai trung nghia";
// const age = 33;

// document.getElementById("name").innerHTML = ` tên: ${name1} `;
// document.getElementById("age").innerHTML = `age: ${age}`;

// Theo Vue

Vue.createApp({
  data: function () {
    return {
      nameUser: "Mai Trung Nghĩa",
      className: 33,
    };
  },
}).mount("#interpolation");

Vue.createApp({
  data() {
    return {
      imgURL:
        "data:image/jpeg;base64,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",
      linkInfo: "https://vi.wikipedia.org/wiki/Mark_Zuckerberg",
      HelloGuys: "Day la noi dunh test",
    };
  },
}).mount("#Bind-attribute");

function getRandomInt() {
  return Math.floor(Math.random() * 6 + 1);
}
Vue.createApp({
  methods: {
    test() {
      const arrayNumber = [getRandomInt(), getRandomInt(), getRandomInt()];

      const tongsonut = arrayNumber.reduce((totalNumber, initial) => {
        return (totalNumber += initial);
      }, 0);
      if (tongsonut > 10) {
        return "tài";
      } else {
        return "Xỉu";
      }
    },
  },
}).mount("#method");

Vue.createApp({
  data() {
    return { text: "<textarea>Hello may con bo` </textarea>" };
  },
}).mount("#raw");

Vue.createApp({
  //data(){return{}} nơi lưu chữ các biến, còn methods là lưu trữ các hàm
  //mount là dom tới thẻ
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClickMe() {
      alert("Click me!");
    },

    handleIncrement(count) {
      return (this.count += count);
    },

    handleSubmit() {
      alert("done");
    },
  },
}).mount("#event");

Vue.createApp({
  data() {
    return {
      dataMessenger: "test",
    };
  },
  methods: {
    handleChange(e) {
      this.dataMessenger = e.target.value;
    },
  },
}).mount("#two-ways-binding");

Vue.createApp({
  data() {
    return {
      lastName: "Mai",
      firstName: "Trung Nghĩa",
      count: 0,
      getfullname: "",
    };
  },

  // Thông thường watch sẽ dùng để theo dõi 1 kết quả để hiển thị ra màn hình
  watch: {
    count() {
      console.log("thay doi ");
    },
    lastName(newValue) {
      this.getfullname = newValue + " " + this.firstName;
    },
    firstName(newValue) {
      this.getfullname = newValue + " " + newValue;
    },
  },

  //Computed sẽ theo dõi 1 trong các phép tính phức tạp để từ đó trả ra màn hình
  //
  computed: {
    fullname() {
      return this.lastName + " " + this.firstName;
    },
  },

  methods: {
    handleChangeName(e) {
      const { name, value } = e.target;
      this.name = value;
    },
    // getFullname() {
    //   console.log("run getFullName");

    // }, Sai vi khong thay doi nhung no van cap nhat lai lam giam perfomance
    handleIncrement() {
      console.log("run getCount");
      return (this.count += 1);
    },
  },
}).mount("#Computed-and-Watchers");

Vue.createApp({
  data() {
    return {
      color: "yellow",
      bgColor: "red",
    };
  },
}).mount("#styling");
