import React from 'react';
import {Link} from 'react-router-dom';
import {location} from '../data/location';

const terms=[
 ['Using this website','This website introduces VJ’s Kitchen, its menu and ways to contact the restaurant. Please use it lawfully and do not interfere with its operation.'],
 ['Menu and availability','Menu prices, dishes, lunch schedules and availability can change. Please confirm current details with the restaurant. Photos include stock photographs and AI-generated illustrations; they do not promise exact portions or presentation. Image information is available on the Photo Credits page.'],
 ['Orders and payments','The bag on this website is a local menu preview. Adding dishes or checking details does not submit an order or collect payment. Online ordering links take you to the restaurant’s separate Square-backed website, where the checkout provider’s terms apply.'],
 ['Reservations and enquiries','The reservation form checks details locally and does not send or confirm a booking. Call the restaurant for confirmation. The contact page opens your email app; you must send the message from that app.'],
 ['Dietary needs','Ingredient and preparation notes describe common versions of dishes. Contact the restaurant directly about allergies, ingredients and dietary needs before ordering.'],
 ['External links','Maps, social networks, recipe sites and ordering providers operate separately. Their content, terms and privacy policies apply when you use those services.'],
 ['Updates','These terms describe the current website and may be updated as its features change.']
];
const privacy=[
 ['Scope','This notice describes the features of this VJ’s Kitchen website. Separate ordering, map and social services have their own privacy policies.'],
 ['Menu preview on your device','Your preview bag is stored in your browser’s local storage under the key vj-cart so it can remain available between visits. This feature does not transmit the bag to the restaurant. You can remove it by clearing this website’s browser storage.'],
 ['Forms and email','Reservation and preview checkout details are checked in your browser; these forms do not send or save a booking or order. The contact form opens your email app with your name, email address and message. They are sent through your email provider only when you choose to send the email.'],
 ['Maps and external services','Embedded Google Maps loads content from Google and can share technical information such as your IP address and browser details with Google. Ordering and social links take you to separate services, including Square, Instagram, Facebook and WhatsApp. Those services process information according to their own policies. Joining the WhatsApp group may make your profile information visible to other members according to WhatsApp’s settings.'],
 ['Tracking and technical information','The current website code does not install advertising pixels or analytics tools. Local storage is used for the preview bag. Hosting and external services may process technical connection information needed to deliver their content.'],
 ['Your choices','You can clear local website storage, avoid external links, and contact the restaurant by phone instead of email. Contact the restaurant using the details below with privacy questions or requests concerning information you have supplied directly.'],
 ['Updates','This notice will need to reflect any future changes to forms, analytics, ordering or other data-processing features.']
];
export default function Policies({type}){const privacyPage=type==='privacy';return <article className="policy-page"><p className="eyebrow">VJ’S KITCHEN · WEBSITE INFORMATION</p><h1>{privacyPage?'Privacy Policy':'Terms of Service'}</h1><p className="policy-date">Last updated: November 3, 2026</p>{(privacyPage?privacy:terms).map(([heading,body])=><section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}<section><h2>Contact VJ’s Kitchen</h2><address>{location.street}, {location.city}<br/><a href={`mailto:${location.email}`}>{location.email}</a><br/><a href={location.telephone}>{location.phone}</a></address></section><nav aria-label="Related website information"><Link to={privacyPage?'/terms-of-service':'/privacy-policy'}>{privacyPage?'Terms of Service':'Privacy Policy'}</Link><Link to="/photo-credits">Photo credits</Link></nav></article>}
