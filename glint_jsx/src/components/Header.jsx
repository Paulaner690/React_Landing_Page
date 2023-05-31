import './Header.css'

const Header = () => {
    return ( 
        <header>
            <h2>Hello There</h2>
            <h1>We Are Glint</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusantium commodi sed, modi nihil incidunt saepe consequuntur odio, laudantium, deserunt facere in officiis cum iure aliquid voluptatum esse magni voluptatem inventore excepturi hic. Ea placeat aliquam voluptate, nobis dolorem molestias impedit sint fugiat vero illo, voluptas veritatis, laboriosam perferendis quod.</p>
            <section className='sectionInfoHeader'>
            <div className='containerHeaderInfo'>
                <p className='bigNumber'>127</p>
                <h5>Award Recived</h5>
            </div>
            <div className='lineBetween'></div>
            <div className='containerHeaderInfo'>
                <p className='bigNumber'>1505</p>
                <h5>Cups of Coffee</h5>
            </div>
            <div className='lineBetween'></div>
            <div className='containerHeaderInfo'>
                <p className='bigNumber'>109</p>
                <h5>Projects Completed</h5>
            </div>
            <div className='lineBetween'></div>
            <div className='containerHeaderInfo'>
                <p className='bigNumber'>102</p>
                <h5>Happy Clients</h5>
            </div>
           </section>
        </header>
     );
    }
    
export default Header;