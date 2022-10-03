import { Link } from "react-router-dom"


const Card = ({ prod }) =>{         
            return (
                
            <div className="col">
                <div className="card" style={{ width: '18rem' }}>
                    <img className="card-img-top" src={prod.img} alt=".."/>
                    <div className="card-body">
                        <h5 className="card-title">{prod.name}</h5>
                        <p className="card-text">{prod.description}</p>
                        <h3>{prod.price}</h3>
                        <div>
                        </div>
                        <Link to={`/detail/${prod.id}`} className="btn btn-primary">Ver detalle</Link>
                    </div>
                    </div>
            </div>
           
)}

export default Card