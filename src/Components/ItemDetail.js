import ItemCount from "./ItemCount"


function ItemDetail(props) {


    return (
        <div className='card md:mx-auto my-8 flex'>
            <div className="w-full max-w-sm bg-white dark:bg-gray-200">
                <img className="p-3 rounded-t-lg" src={props.image} alt="productimage" />
                <div className="px-5 pb-5 text-center">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray">{props.name}</h5>
                    <div className="flex-col items-center">
                        <div className="items-center mt-2.5 mb-5 text-center">
                            <span className="bg-gray-100 text-gray-500 text-xs font-semibold rounded dark:bg-gray-200 dark:text-gray-500">"{props.title}"</span>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-1xl font-bold text-gray-900 dark:text-gray">Medidas:{props.size} </span>
                        </div>

                    </div>
                    <span className="text-gray-700 font-bold"> Precio : {props.precio} </span>
                    <ItemCount stock={props.stock} initial={0} />
                </div>
            </div>

            <div className="max-w-lg p-2 mx-auto bg-white dark:bg-gray-200 ">

                <div className="card2 mt-2">

                    <div className="items-center mb-5">
                        <span className="text-s font-semibold mr-2 px-2.5 py-0.5 rounded text-gray"> {props.resena}</span>
                    </div>

                    <button className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1.5 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"> Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail