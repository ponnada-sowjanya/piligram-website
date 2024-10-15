import React from 'react';
import Reactlogo from './images.jfif';
import Reactimage from './images1.jfif';
import Reactlogos from './download.jfif';
import Reactimages from './image2.jpg';
const MainSection =() =>
{
    return(
        <section className="main-section">
            <div className="container">  
                <img src={Reactlogo} height="150" width="auto"/>
                <img src={Reactimage} height="150" width="auto"/>
                <img src={Reactlogos} height="150" width="auto"/>
                <img src={Reactimages} height="150" width="auto"/>
                <h2>Welcome to our Website</h2>
                <p>Religion is a range of social-cultural systems, including designated behaviors and practices, morals, beliefs, worldviews, texts, sanctified places, prophecies, ethics, or organizations, that generally relate humanity to supernatural, transcendental, and spiritual elements[1]—although there is no scholarly consensus over what precisely constitutes a religion.[2][3] Different religions may or may not contain various elements ranging from the divine,[4] sacredness,[5] faith,[6] and a supernatural being or beings.[7]
The origin of religious belief is an open question, with possible explanations including awareness of individual death, a sense of community, and dreams.[8] Religions have sacred histories, narratives, and mythologies, preserved in oral traditions, sacred texts, symbols, and holy places, that may attempt to explain the origin of life, the universe, and other phenomena.</p>
                <h3>Religious Places in India</h3>
                <p>Kedarnath, Varanasi, Tirupati, Shirdi, Madurai, Ayodhya, Vaishnodevi Devi, Sabarimala, Ranakpur, Haridwar, Amritsar, Bodh Gaya, Amarnath, Mathura, Rishikesh, Badrinath, Vrindavan, Rameshwaram, Pushkar, Puri.</p>
                <h4>Ayodhya Rama Temple</h4>
                <p>The Ram Temple in Uttar Pradesh's Ayodhya is witnessing a huge crowd of about 1 to 1.5 lakh pilgrims daily, according to the Shri Ram Janmbhoomi Teerth Kshetra - the trust that was constituted to look after the construction and management of the temple.

So if you are planning a trip to Ayodhya to pay your obeisance and get a glimpse of Ram Lalla, here are some important rules and regulations you must know.

As per the trust, devotees can enter the Shri Ram Janmabhoomi Mandir for Darshan from 6:30 AM to 9:30 PM.
</p>
            </div>

        </section>
    );
}
export default MainSection;
