import './Styles/Home.css'
import globe from '../assets/globe.gif'
import book from '../assets/book.png'
import ring from '../assets/ring.png';
import { useNavigate } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Solo from '../assets/solo.jpg';
import Chat from '../assets/Chat.jpg';
import Meet from '../assets/meet.png';
import CardActions from '@mui/material/CardActions';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import dots from '../assets/dots.png';
import cross from '../assets/cross.png'
import logo from '../assets/Study.png';


function Home() {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/room');
    };

    const handleNavSolo = () => {
        navigate('/solo');
    }

    const handleLogin = () => {
        navigate('/login');
    }
    return (
        <>
            <div className="firstPage">

                <img src={globe} alt='globe' className='globe' />
                <section className="mainTitle">
                    <div className="title"><span className="highlight">Join</span>, <span className="highlight">Study</span> and <span className="highlight">Chat</span> with
                        <br />the students from all over<br />the world</div>
                    <div className="subTitle">Need motivation? Meet new students community</div>
                </section>
                <button onClick={handleNavigation} className='btn1'>Join Study Room</button>
                <img src={book} alt='book' className='book'></img>
                <img src="https://assets-global.website-files.com/62443d15248af30a21e60133/62568b2d90c44730e9365e5c_sphere.png" className="blurCircle" ></img>
            </div >

            <div className='secondPage'>
                <h1 className='explore'>Explore</h1>
                <div className='circle1' style={{ width: 107, height: 210, }}>
                    <div style={{ width: 107, height: 210, left: 0, top: 0, }}>
                        <div style={{ width: 120, height: 120, left: -7.02, top: -10.74, }}>
                            <div style={{ width: 120, height: 120, left: 0, top: 0, background: 'linear-gradient(124deg, #0070F0 0%, #92C5FF 100%)', borderRadius: 1783.12 }} />
                        </div>
                    </div>
                </div>
                <div className='circle2' style={{ width: 107, height: 210, }}>
                    <div style={{ width: 107, height: 210, left: 0, top: 0, }}>
                        <div style={{ width: 70, height: 70, left: -7.02, top: -10.74, }}>
                            <div style={{ width: 70, height: 70, left: 0, top: 0, background: 'linear-gradient(124deg, #0070F0 0%, #92C5FF 100%)', borderRadius: 1783.12 }} />
                        </div>
                    </div>
                </div>
                <section className='card-section'>
                    <div className='cardEdit' >
                        <img src={Solo} className='soloRoomImage'></img>
                        <Typography gutterBottom variant="h5" component="div" style={{
                            paddingLeft: 16,
                            paddingTop: 30,
                            color: '#00E0FF',
                            fontWeight: 900,
                            fontSize: 20,
                            marginBottom: 0,
                        }}>
                            Solo Study Room
                        </Typography>

                        <CardContent><p className='card1Para'>A study room can offer a conducive environment for focused learning and productivity.</p></CardContent>
                        <CardActions>
                            <button onClick={handleNavSolo} size="small" className='joinBtn' >Join Now <ArrowForwardIcon className='arrowIcon' fontSize="small" /></button>
                        </CardActions>
                    </div>
                    <div className='cardEdit' >
                        <img src={Chat} className='chatImage'></img>
                        <Typography gutterBottom variant="h5" component="div" style={{
                            paddingLeft: 16,
                            paddingTop: 30,
                            color: '#00E0FF',
                            fontWeight: 1000,
                            fontSize: 20,
                            marginBottom: 5,
                        }}>
                            Environment
                        </Typography>
                        <CardContent>Chat boxes enable instant communication between users, fostering real-time collaboration and discussion.</CardContent>
                        <CardActions>
                            <button onClick={handleNavigation} style={{ paddingTop: 25 }} size="small" className='joinBtn' >Join Now <ArrowForwardIcon className='arrowIcon' fontSize="small" /></button>
                        </CardActions>
                    </div>
                    <div className='cardEdit' >
                        <img src={Meet} className='meetImage'></img>
                        <Typography gutterBottom variant="h5" component="div" style={{
                            paddingLeft: 16,
                            paddingTop: 30,
                            color: '#00E0FF',
                            fontWeight: 900,
                            fontSize: 20,
                            marginBottom: 10,
                        }}>
                            Study Together
                        </Typography>
                        <CardContent>Join study room and connect to the strangers from all around the world.</CardContent>
                        <CardActions>
                            <button onClick={handleNavigation} style={{ paddingTop: 40 }} size="small" className='joinBtn' >Join Now <ArrowForwardIcon className='arrowIcon' fontSize="small" /></button>
                        </CardActions>
                    </div>
                </section>
                <img src={ring} className='ring' />
            </div >
            <div className='thirdPage'>
                <h1 className='title3'>Why study room?</h1>
                <div className='infoT'>
                    <div className='info1'>
                        <span className='infoHead'>
                            <h3>①</h3>
                            <h2>Reduced Distractions</h2>
                        </span>
                        <p>Online study rooms often create a structured and quiet environment, minimizing distractions that can occur in a home setting.
                        </p>
                    </div>

                    <div className='info1'>
                        <span className='infoHead'>
                            <h3>②</h3>
                            <h2>Sense of Community</h2>
                        </span>
                        <p>Studying with others, even if it's virtually, can provide a sense of community and shared purpose.
                            You can discuss concepts, ask questions, and clarify doubts with your peers.
                        </p>
                    </div>
                    <img src="https://assets-global.website-files.com/62443d15248af30a21e60133/62568b2d90c44730e9365e5c_sphere.png" className="imageT2" ></img>
                    <div className='info1'>
                        <span className='infoHead'>
                            <h3>③</h3>
                            <h2>Accountability</h2>
                        </span>
                        <p>The presence of others can create a sense of accountability. Knowing that others are also studying can encourage you to stay committed to your work and avoid procrastination.
                        </p>
                    </div>
                    <div className='info1'>
                        <span className='infoHead'>
                            <h3>④</h3>
                            <h2>Social Interaction</h2>
                        </span>
                        <p>Studying online doesn't have to be isolating. Online study rooms provide an opportunity for social interaction, even if it's virtual.
                        </p>
                    </div>
                    <img src="https://assets-global.website-files.com/62443d15248af30a21e60133/62568b2d90c44730e9365e5c_sphere.png" className="imageT1" ></img>
                </div>

                <img src={dots} className='dots' />
                <div className='contact'>
                    <h2>Get in touch with us!</h2>
                    <p>Get in touch with us to explore how we can <br />collaborate together.<br /> If you want to connect, we're here for you.
                    </p>
                    <button className='btn1'>Get in touch!</button>
                </div>
            </div>
            <img src="https://assets-global.website-files.com/62443d15248af30a21e60133/62568b2d90c44730e9365e5c_sphere.png" className="blurCircle2" ></img>
            <img src={cross} className='cross' />

            <footer className="footer">

                <nav>
                    <a href="/"><img src={logo} className='logo' /></a>
                    <span className='footNav'>
                        <a href="/">Home</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </span>
                </nav>
                <p>&copy; 2024 StudyTogether</p>
            </footer>


        </>
    )
}

export default Home;