import { useRouter } from "next/router"
import * as carArray from "../../public/api/cars.json"
import useWindowSize from "../../src/hooks/useWindowSize";
import { Car } from "../../src/components/Car";

export default function Learn(){
    const router = useRouter()
    const {id} = router.query;
    const item = carArray.find(car=>car.id===id)
        const { width, height } = useWindowSize();
    const deviceType = width && width > 767 ? "desktop":"mobile"
    return (item ? <Car item={item}/>:<></>)
}