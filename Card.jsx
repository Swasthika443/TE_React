import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function TextExample({data}) {
    console.log(data)
  return (

    <Card style={{ width: '18rem' }}>
        
      <Card.Body style={{textAlign:"center"}}>
        <img style={{height:"80px"}} src={data.icon}></img>
        <Card.Title  >{data.title}</Card.Title>
        <Card.Text>
        {data.description}
        </Card.Text>
        <Button variant="outline-dark">READ MORE</Button>
        
      </Card.Body>
    </Card>
  );
}

export default TextExample;