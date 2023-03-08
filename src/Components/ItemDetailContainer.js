
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

function ItemDetailContainer() {
  const {productoID } = useParams();
  const [cartas, setCartas] = useState(<Spinner />);
  const [loading, isLoading] = useState(true)

  const getItem = () => {
    let items = require("../Backend/productos.json")
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(items)
        isLoading(false)
      }, 2000);
    })
  }

  useEffect(() => {
    async function fetchedItems() {
      const items = await getItem();
      setCartas(items)
    }

    fetchedItems()
  }, []);

  return (

    <div className="md:flex justify-start ml-10 h-[100vh] ">
      {loading ? cartas : cartas
        .filter((produc) => produc.id.includes(productoID))
        .map((items) => (

          <ItemDetail
            key={items.id}
            name={items.name}
            title={items.title}
            size={items.size}
            image={items.image}
            category={items.category}
            resena={items.resena}
            id={items.id}
            precio={items.precio}
            stock={items.stock}
          />
        ))}
    </div>
  );
}

export default ItemDetailContainer;