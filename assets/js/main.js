Vue.createApp({
  data() {
    return {
      cards: [
        {
          id: 1,
          name: "bulbasaur",
          images: {
            game: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
              back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
            },
            png: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            },
            svg: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
            },
          },
        },
        {
          id: 2,
          name: "ivysaur",
          images: {
            game: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
              back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
            },
            png: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
            },
            svg: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
            },
          },
        },
        {
          id: 3,
          name: "venusaur",
          images: {
            game: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
              back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
            },
            png: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
            },
            svg: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
            },
          },
        },
        {
          id: 4,
          name: "charmander",
          images: {
            game: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
              back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
            },
            png: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
            },
            svg: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
            },
          },
        },
        {
          id: 1,
          name: "bulbasaur",
          images: {
            game: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
              back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
            },
            png: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            },
            svg: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
            },
          },
        },
        {
          id: 2,
          name: "ivysaur",
          images: {
            game: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
              back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
            },
            png: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
            },
            svg: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
            },
          },
        },
        {
          id: 3,
          name: "venusaur",
          images: {
            game: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
              back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
            },
            png: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
            },
            svg: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
            },
          },
        },
        {
          id: 4,
          name: "charmander",
          images: {
            game: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
              back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
            },
            png: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
            },
            svg: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
            },
          },
        },
      ].sort(() => Math.random() - 0.5),
      selectedCard: [],
      pairedCard: [],
      gameResult: {
        win: false,
      },
      gameData: {},
    };
  },

  computed: {
    //The này là các thẻ úp
    coveredCard() {
      let coveredCard = this.cards.filter(
        (card) => !this.uncoveredCard.includes(card)
      );
      if (coveredCard.length === 0) {
        this.gameResult.win = true;
      }
      return coveredCard;
    },
    //... Thẻ ngửa
    uncoveredCard() {
      let uncoveredCard = [...this.selectedCard, ...this.pairedCard];
      return uncoveredCard;
    },
  },
  methods: {
    handleSelectCard(card) {
      console.log(card);
      this.selectedCard.push(card);
      if (this.selectedCard.length === 2) {
        const [card1, card2] = this.selectedCard;
        if (card1.id === card2.id) {
          alert("oke");
          this.pairedCard.push(card1), this.pairedCard.push(card2);
        }
        setTimeout(() => (this.selectedCard = []), 800);
      }
    },
  },
}).mount("#app");
