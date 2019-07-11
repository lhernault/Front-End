import React from 'react';
import Card from './Card';

const CardList = ({robots}) => { // (acces with props also
   
    return  (
        <div>
                {
                    robots.map((user, i) => {
            return  (
                <Card 
                key={i} //when using loop, always give a unique key prop id
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}
                />
            );
         })
        }
        </div>
    );
 }

export default CardList;

/*
  const cardComponent = robots.map((user, i) => {
      return  (
      <Card 
      key={i} //when using loop, always give a unique key prop id
      id={robots[i].id} 
      name={robots[i].name} 
      email={robots[i].email}
      />
      );
        
    })
    
    return (
        <div>           
           {cardComponent}
        </div>
    );

*/