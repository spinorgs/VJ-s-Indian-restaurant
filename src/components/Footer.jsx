import React from 'react';
import {Link} from 'react-router-dom';
import {ArrowRight,Instagram,Facebook,MessageCircle} from 'lucide-react';
import {location,directionsUrl,communityLinks,orderingUrl} from '../data/location';

export default function Footer(){return <>
  <section className="visit-banner" aria-label="Visit VJ’s Kitchen"><div className="visit-banner-inner"><div><p>YOUR TABLE IS WAITING</p><h2>Come hungry. Leave happy.</h2><address>{location.street}, {location.city}, {location.country}</address></div><a href={directionsUrl} target="_blank" rel="noreferrer">Get Directions <ArrowRight size={22}/></a></div></section>
  <footer className="kitchen-footer"><div className="kitchen-footer-inner">
    <div className="kitchen-footer-columns">
      <div className="kitchen-footer-intro"><Link className="brand logo-brand" to="/" aria-label="VJ’s Kitchen home"><img src="/images/vjs-kitchen-logo.png" alt="VJ’s Kitchen" width="504" height="599" loading="lazy"/></Link><p>Bold Indian flavors, made for sharing.<br/>Your neighborhood Indian kitchen in Sacramento.</p></div>
      <div className="kitchen-footer-column"><h3>EXPLORE VJ’S</h3><Link to="/menu">Menu</Link><Link to="/recipes">Recipes</Link><Link to="/about">About Us</Link><Link to="/events">Gatherings</Link><Link to="/contact">Location</Link></div>
      <div className="kitchen-footer-column"><h3>GET IN TOUCH</h3><a href={location.telephone}>{location.phone}</a><a href={`mailto:${location.email}`}>{location.email}</a><address>{location.street}, {location.city}, {location.country}</address><a href={orderingUrl} target="_blank" rel="noreferrer">Order on our Square site</a><p>Dine-in & takeaway.<br/>Call for current hours and availability.</p></div>
      <div className="kitchen-footer-column"><h3>FOLLOW ALONG</h3><p className="footer-social-intro">A little closer to the kitchen.</p>{communityLinks.map(link=><a className="footer-social-link" href={link.href} key={link.label} target="_blank" rel="noreferrer">{link.label==='Instagram'?<Instagram size={18}/>:link.label==='Facebook'?<Facebook size={18}/>:<MessageCircle size={18}/>}<span>{link.label}{link.label==='Instagram'?' · @vjshub916':link.label==='Facebook'?' · VJ’s Kitchen':' · Join our community'}</span></a>)}</div>
    </div>
    <div className="kitchen-footer-neighborhood"><p>OUR GATEWAY OAKS NEIGHBORHOOD</p><div><strong>VJ’s Kitchen</strong><span>Indian Cuisine · Sacramento</span></div><a href="https://vjsgrill.bar/index.html" target="_blank" rel="noreferrer"><strong>VJ’s Bar & Burger</strong><span>Explore our sister restaurant</span></a></div>
    <div className="kitchen-footer-base"><span>© {new Date().getFullYear()} VJ’s Kitchen</span><div className="footer-policy-links"><Link to="/terms-of-service">Terms of Service</Link><Link to="/privacy-policy">Privacy Policy</Link><Link to="/photo-credits">Photo credits</Link></div><button onClick={()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}>Back to top</button></div>
  </div></footer>
</>}
