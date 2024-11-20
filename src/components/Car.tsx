import React from "react";
import Carousel from 'react-multi-carousel';
import { Card,CardContent,Text,Spacer, Link, Grid, Row, Col } from 'vcc-ui';
import { Image } from "react-bootstrap";
import * as carArray from "../../public/api/cars.json"
import useWindowSize from '../hooks/useWindowSize';

export const Car = ({item}:{item:any}) => {
    const { width, height } = useWindowSize();
    const deviceType = width && width > 767 ? "desktop":"mobile"

    return  <Card style={{boxShadow:"none"}}>
        <CardContent>
            <Text>{item.bodyType}</Text>
        {deviceType == "desktop" ? 
                   (<Text>
                    <Text subStyle="emphasis" style={{marginRight:"10px"}}>{item.modelName}</Text>
                    <Text>{item.modelType}</Text>
                    </Text> ) :<>     <Text subStyle="emphasis" style={{marginRight:"10px"}}>{item.modelName}</Text>
                    <Text>{item.modelType}</Text></>}

            <Image src={item.imageUrl}/>
        <Spacer />
        
<Grid>
  <Row align="center">
    <Col size={5}><Link href={"/learn/"+item.id} arrow="right">
    LEARN
</Link></Col>
    <Col size={5}><Link href={"/shop/"+item.id} arrow="right">
  SHOP
</Link></Col>
  </Row>
 
</Grid>
      </CardContent>
    </Card>

};
