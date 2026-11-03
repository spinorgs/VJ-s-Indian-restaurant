import React from 'react';
import {ArrowUpRight} from 'lucide-react';
import {communityLinks} from '../data/location';

const reviewSource='https://www.vjskitchenca.com/';
const reviews=[
  {name:'Big Romo916',quote:'Phenomenal food. Chicken 65, Butter Curry, Chicken Tikka Masala and Garlic Naan were amazing.'},
  {name:'Chandrahaas V.',quote:'Warm and welcoming staff too.'},
];

export default function Community(){return <>
  <section className="guest-notes" aria-labelledby="guest-notes-title">
    <div className="guest-notes-heading"><p className="ed-label">GOOD FOOD GETS PEOPLE TALKING</p><h2 id="guest-notes-title">A few words.<br/><em>A lot of love.</em></h2><p>Five-star customer testimonials featured on VJ’s Kitchen’s restaurant website.</p><a className="ed-text-link" href={reviewSource} target="_blank" rel="noreferrer">Read the original testimonials <ArrowUpRight size={15}/></a></div>
    {reviews.map(review=><figure className="guest-note" key={review.name}><span className="review-stars" aria-label="5 out of 5 stars">★★★★★</span><blockquote>“{review.quote}”</blockquote><figcaption>{review.name}<span>Excerpt · VJ’s Kitchen website</span></figcaption></figure>)}
  </section>
  <section className="community-section"><div><p className="ed-label">THERE’S MORE AT OUR TABLE</p><h2>A little closer<br/>to <em>the kitchen.</em></h2><p>Follow along on Instagram and Facebook, or join our WhatsApp community.</p></div><div className="community-links">{communityLinks.map((link,i)=><a href={link.href} target="_blank" rel="noreferrer" key={link.label}><span>0{i+1}</span>{link.label}<ArrowUpRight size={24}/></a>)}</div></section>
</>}
