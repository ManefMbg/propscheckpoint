import React from 'react'
import {Card,ListGroup}  from 'react-bootstrap'


const Player = ({jerseyNumber,age,name, nationality,imageUrl,team}) => {
  // console.log(data)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        Team: {team}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Nationality: {nationality}</ListGroup.Item>
        <ListGroup.Item>JerseyNumber: {jerseyNumber}</ListGroup.Item>
        <ListGroup.Item>Age: {age}</ListGroup.Item>
      </ListGroup>
    </Card>

    
  )
}

// defining default props for each attribute
Player.defaultProps = {
  name: 'Manef',
  age : '24 years',
  jerseyNumber: '2',
  nationality :'Tunisienne',
  team: 'Tunis',
  photo: 'https://res.cloudinary.com/dgs5ufh6i/image/upload/v1706126098/2IgLoFjjRieKJQE3K3UuCw_ubzeou.webp'
}

export default Player