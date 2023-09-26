import React, { useState } from 'react'
import css from "./Cards.module.css"
import Card1 from "../../assets/membershipcard.svg"
import Blur from "../../assets/blur-blue.svg"
import LArrow from "../../assets/left-arrow.svg"
import RArrow from "../../assets/right-arrow.svg"
import { motion } from 'framer-motion'

const Cards = () => {
  const [cards,setCards]=useState(0)

  const increment = () => {
    if (cards<4){
    setCards(cards + 1);
    }
  };

  const decrement = () => {
    if (cards > 0) {
      setCards(cards - 1);
    }
  };

  return (
    <div className={css.container}>
        <div className={css.div1}> 
           <span>membership card</span>
        </div>
        <div className={css.div2}>
            <span>BATCAVE OGs</span>
            
        </div>
        <div className={css.div3}>
 {/* left */}
 <div className={css.leftmiddlewrap}>
          <div className={css.left}>
            <span>Presence</span>
            <div className={css.cardline}></div>
            <div className={css.cities}>
             <span> Coimbatore,Chennai,Bengaluru,Mysore,Kochi ,Trivandrum,
              Hyderabad,Visakhapatnam </span>
            </div>
          </div>

{/* middle */}
          <div className={css.middle}>
          <img src={Blur} alt="" />
        <img src={Card1} alt="" />
          </div>
          {/* <div className={css.backline}></div> */}

          </div>

{/* right */}
          <div className={css.right}>

          {/* top */}
           <div className={css.rtop}>
            <img className={css.larrow} onClick={decrement} src={LArrow} alt="" />
            <div className={css.sline}></div>
            <span>Features</span>
            <div className={css.sline}></div>
            <img  onClick={increment} src={RArrow} alt="" />

           </div>

          {/* top */}

 
            <div className={css.cardline}></div>
            {/* bottom */}
            <div className={css.bottomcontent}>
           {cards===0 &&   <motion.span
             initial={{ opacity: 0}}
             whileInView={{ opacity: 1}}
              transition={{ duration: 2 }}>Exclusive Event Access: 
Get VIP entry to thrilling car meets and rides.</motion.span> }

{cards===1 &&  <motion.span
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
       transition={{ duration: 2 }}> Savings on Services: Enjoy discounts on car maintenance and 
  accessories. </motion.span>}

  {cards===2 && <motion.span
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
     transition={{ duration: 2 }}>
    Community Connection: Join a passionate network of car enthusiasts.</motion.span>}

    {cards===3 && <motion.span
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
       transition={{ duration: 1.4 }}>
      Lifetime Access to Club Facilities: Batcave sets up dedicated car club facilities,
       and members get lifetime free access.</motion.span>}

       {cards===4 && <motion.span
         initial={{ opacity: 0}}
         whileInView={{ opacity: 1}}
          transition={{ duration: 1.4 }}>  Personalised Benefits: Tailored perks based on your interests.
        </motion.span>}



            </div>

          
 


            {/* bottom */}
          
          </div>


         

        </div>
      
    </div>
  )
}

export default Cards