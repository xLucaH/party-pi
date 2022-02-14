import React from 'react';
import { CostTable } from '../assets/html/productionCost';
import BreakEven from '../assets/html/breakEven';
import Persona from '../assets/images/Maria.PNG';
import Reparatur_PC from '../assets/images/Reparatur_PC-428539_1170.pixabay.jpg';
import Kundensupport from '../assets/images/kundenservice.jpg'
import AOpen from '../assets/images/kisspng-aopen-digital-signs-computer-monitors-open-pluggab-milestone-hotel-5b1af0b8982149.7663685915284922166231.png';
import Jws from '../assets/images/jws logo.jpg';

const BusinessCanvas = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <h1 style={{ marginLeft: '0.4em' }}>
        Business Canvas</h1>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginLeft: '1rem'
      }}>
        <h3 style={{ marginTop: '0.5em' }}> Value Proposition</h3>
        <ul style={{ margin: '0.5em', paddingLeft: '25px' }}>
          <li>Experience: Our programmers know different languages.</li>
          <li>Young and dedicated: We are closer to our target group and can understand them better than any other company!</li>
          <li>Play it with your friends: With a variation of minigames the Party-Pi® can get rid of our customers boredom.</li>
          <hr style={{ marginTop: '1em' }} />
        </ul>
        <h3 style={{ marginTop: '0.5em' }}> Customers Segment</h3>
        <p style={{ marginTop: '0.5em', marginBottom: '0.2em', padding: '0 10px' }}>
          We value good communication and service with our customers.
        </p>
        <p style={{ marginTop: '0.5em', marginBottom: '0.6em', padding: '0 10px' }}>
          Therefore we offer support via e-Mail.
          To keep our customers up to date we post information about our updates and new products via our social media channels as well.
        </p>
        <ul style={{ margin: '0.5em', paddingLeft: '0px' }}>
          <div style={{ textAlign: 'left', padding: '10px 0' }}>
            <img src={Persona} alt='' style={{
              margin: 'auto',
              maxWidth: '75%',
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
              marginBottom: '25px'
            }} />
            <p style={{ marginTop: '0.5em', marginBottom: '0.2em', paddingLeft: '10px' }}>
              Our product should appeal to a younger audience like students. They have a lot of stress to deal with in their daily life
              so are more likely to be attracted to the concept of gaming. Our target group uses a lot of online-channels
              like Instagram or Youtube which we can also use to advertise our products.
            </p>
          </div>
          <hr style={{ marginTop: '1em' }} />
        </ul>
        <h3 style={{ marginTop: '0.5em', marginBottom: '0.1em' }}> Channels</h3>
        <span style={{ margin: '0.5em', padding: '0 10px' }}>
          <p>Children and Teenagers nowadays are often found to consume all kinds of information online. Therefore we have implemented a website where orders can be submitted.
            The Party-Pi® will not be available in retail stores. Our work should be shown and advertised via videos, photos and words.
          </p>
          <p>We also can be found on Instagram, Twitter, Facebook and Telegram
            where we post news about our little gaming console.
          </p>
          <hr style={{ marginTop: '1em' }} />
        </span>
        <div style={{
          background: `rgba(0, 0, 0, .65) url(${Reparatur_PC})`,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundBlendMode: 'darken',
          color: 'white',
          margin: '0'
        }}>
          <h3 style={{ marginTop: '0.5em', marginBottom: '0.1em', padding: '0' }}> Revenue Streams</h3>
          <span style={{
            margin: '0.5em',
            paddingLeft: '10px',
          }}>
            <p style={{ marginTop: '0.5em', marginBottom: '0.2em', paddingLeft: '10px' }}>Since we sell our console individually, we make a revenue on the sale of each product.
              We also offer an online subscription which allows the user to compete with other users on the Internet in a highscore ranking.
              The scores of each game will be stored in our database in the future.
            </p>
            <p style={{ marginTop: '0.5em', marginBottom: '0.2em', paddingLeft: '10px' }}>As a chargeable service we offer a warrenty extension to a maximum of <span style={{ fontWeight: 'bold' }}>three</span> years
            </p>
            <hr style={{ marginTop: '1em' }} />
          </span>
        </div>
        <h3 style={{ marginTop: '0.5em', marginBottom: '0.1em' }}> Key Partnerships</h3>
        <span style={{ margin: '0', padding: '0 25px', display: 'flex' }}>
          <p>We found a great business partner in AOpen, which is known for the motherboard manufacture.
            This allows us to make a cheaper bulk purchase of boards for our consoles.
          </p>
          <img src={AOpen} alt='AOpen' style={{ maxWidth: '40%', maxHeight: '40%', objectFit: 'contain' }} />
        </span>
        <span style={{ margin: '0', padding: '0 25px', display: 'flex' }}>
          <p>We also partner with Jws Group. It is known for the production of monitors & displays.
            This gives us the oppportunity to purchase our displays at a lower price
            than the actual market prize.
          </p>
          <img src={Jws} alt='JWS' style={{ objectFit: 'fill' }} />
        </span>
        <span>
          <hr style={{ marginTop: '1em' }} />
        </span>
        <h3 style={{ marginTop: '0.5em', marginBottom: '0.1em' }}> Key Ressources</h3>
        <span style={{ margin: '0.5em', padding: '0 25px' }}>
          <p>Our employees fulfill more than one role for now as we have not grown so much yet.
            We have two developers that also serve as our marketing team.
            They think of and produce small clips for our social media pages.
            Our hardware expert is also responsible for purchasing our wares.
          </p>
          <p> An overview of our hardware and the estimated prices can be found at <span style={{ fontWeight: 'bold' }}>Cost Structures</span>.
            The most important ressources we need aside from the hardware are the copyright licenses that we need to purchase.
            We also don't need big production space for now but for future expansion it would be neccessary to rent space
            for storage and production.
          </p>
          <hr style={{ marginTop: '1em' }} />
        </span>
        <div style={{
          background: `rgba(0, 0, 0, .65) url(${Kundensupport})`,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundBlendMode: 'darken',
          color: 'white',
          margin: '0'
        }}>
          <h3 style={{ marginTop: '0.5em', marginBottom: '0.1em' }}> Key Activities</h3>
          <p style={{ padding: '0 25px' }}>
            The main focus for the Party-Pi® team is to grow close to our customers.
            We want them to spread word about our products and recommend them to their friends.
            To achieve that we plan to:
          </p>
          <ul style={{ margin: '0.5em', padding: '0 25px' }}>
            <li>optimize our customer support in being available as much as possible</li>
            <li>maintain our social media and website to prevent outdated information</li>
            <li>always try to come up with new minigames or investigate already present minigames
              to be able to implement them
            </li>
            <hr style={{ marginTop: '1em' }} />
          </ul>
        </div>
        <h3 style={{ marginTop: '0.5em', marginBottom: '0.1em' }}> Cost Structure</h3>
        <p style={{ marginBottom: '1em', marginLeft: '0.5em' }}>
          The highest variable costs will definitly be caused by aquiring the needed hardware. The costs themselves depend on already sold units and of course the market situation.
          Due to the COVID-19 situation, every piece of hardware is harder to get ones hands on without having to spend a fortune.
          This will hopefully change in the future and lower our expenses.
          Beneath you find a rough overview of our <span style={{ fontWeight: 'bold' }}>costs per unit </span>:
        </p>
        <CostTable />
        <ul style={{ margin: '0.5em', padding: '0 25px', marginBottom: '2em' }}>

          <li>A compatitor called <span style={{ fontStyle: 'italic' }}>'Nintendo'</span> which sells gameboys. These gameboys are on average around 299€.
            Since our production costs and delivery costs are 85€ per Party-Pi®, we would set the price at <span style={{ fontWeight: 'bold' }}>179,99€</span> brutto to undercut the market
            and cover our costs and expenses well enough.
            Our breakeven analysis shows that we need to sell 5 Party-Pi® consoles per day to generate a minimum profit that covers our costs and pays our salary.
          </li>
        </ul>
        <div style={{ margin: '0.5em', padding: '0 25px', marginBottom: '2em' }}>
          <BreakEven />
        </div>
        <ul style={{ margin: '0.5em', padding: '0 25px', marginBottom: '2em' }}>
          <li>The acquisition of new customers should not result in excessive costs due to our choice of distribution channels.
            We have a fixed budget for marketing, which includes advertisements and commercials.
            Currently, 250€ is budgeted.</li>
          <li>As for our personal costs we don't have additional employees. Our team just consists of 2 developers and 1 system-administrator.
            We plan to spend 1/3 of our revenue on our employees.
          </li>
          <li>Additional costs will arise when we purchase copyrights for some of our minigames.
            We are not sure yet how many of these licences will be needed in the near future.
          </li>
        </ul>
      </div>
    </div >
  );
};

export default BusinessCanvas;