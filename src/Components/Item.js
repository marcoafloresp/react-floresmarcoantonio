import { NavLink } from 'react-router-dom'

export default function item(props) {
    return (
        <div className='card md:mx-auto my-8'>
            <div className="w-full max-w-sm bg-white rounded-xl dark:bg-gray-200 ">
                <a href="#">
                    <img className="p-5 rounded-t-lg" src={props.image} alt="product image" />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-700 dark:text-gray">{props.name}</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                        <span className="bg-gray-100 text-gray-800 text-xs font-semibold rounded dark:bg-gray-200 dark:text-gray-500">Calificacion: {props.title}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-gray-700 dark:text-gray">Medida: {props.size}</span>

                        <NavLink to={`/${props.category}/${props.id}`} className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Comprar</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )

}