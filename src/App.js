import React from "react"
import Header from "./componints/Header";
import Footer from "./componints/Footer";
import Items from "./componints/Items";
import Categories from "./componints/Categories";
import ShowFullItem from "./componints/ShowFulltem";


class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Стул cерый",
          img: "chair_grey.png",
          desc: "Text about this component",
          category: "chairs",
          price: "49.99"
        },
        {
          id: 2,
          title: "Стол",
          img: "table.png",
          desc: "Text about this component",
          category: "tables",
          price: "49.99"
        },
        {
          id: 3,
          title: "Диван",
          img: "sofa.png",
          desc: "Text about this component",
          category: "sofa",
          price: "600.99"
        },
        {
          id: 4,
          title: "Лампа",
          img: "wall_light.png",
          desc: "Text about this component",
          category: "light",
          price: "26.99"
        },
        {
          id: 5,
          title: "Стул белый",
          img: "chair_white.png",
          desc: "Text about this component",
          category: "chairs",
          price: "50.99"
        },

      ],
      showFullItem: false,
      fullItem: {},
    }

    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.DeleteOrder = this.DeleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  
  render() {
    return (
      <div className = "wrapper">
        <Header orders = {this.state.orders} onDelete = {this.DeleteOrder}/>
        <Categories chooseCategory = {this.chooseCategory} />
        <Items onShowItem = {this.onShowItem} items = {this.state.currentItems} onAdd = {this.addToOrder}/>
        
        {this.state.showFullItem && <ShowFullItem onAdd = {this.addToOrder} onShowItem = {this.onShowItem} item = {this.state.fullItem} />}
        <Footer/>
      </div>
    )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === "all") {
      this.setState({currentItems: this.state.items})
      return
    }
    
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  DeleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id) {
        isInArray = true
      } 
    })
    if(!isInArray) {
      this.setState({orders: [...this.state.orders, item] })
    }
  }
}

export default App;
