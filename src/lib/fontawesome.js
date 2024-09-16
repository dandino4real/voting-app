// lib/fontawesome.js
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Prevent automatic adding of CSS since we're manually importing it
config.autoAddCss = false;

// Add the icons to the library
library.add(faFacebook, faTwitter, faInstagram, faEnvelope, faMapMarkerAlt, faPhoneAlt) ;
