import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../utils/MockData"
import  Spinner  from "react-bootstrap/Spinner"
import { ItemDetail } from "../ItemDetail/ItemDetail"


export const ItemDetailContainer = () => {
    const { prodId } = useParams()
    const [ product, setProduct ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        setLoading(true)
        getProductById(prodId)
        .then((res) => {
            setProduct(res)
            setLoading(false)
        })
        .catch((err) =>{
            console.log(err)
            setLoading(false)
        })
    }, [prodId])
    
    return (
        <main>
            { 
                loading ? <Spinner animation="border" variant="primary"/>
                : <ItemDetail {...product}/>
            }
            
        </main>
    )
    
}