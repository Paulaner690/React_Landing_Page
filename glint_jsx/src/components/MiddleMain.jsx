import './MiddleMain.css'

const MiddleMain = () => {
    return ( 
        <main>
            <h4 className='h4Green'>What we do</h4>
            <h3>We've got everything you need to launch and grow your business</h3>
            <section className='gridMiddle'>
                <article>
                    <img className='icon' src="./src/assets/imgs/brush.svg" alt="icon" />
                    <div>
                        <h4>Brand Identity</h4>
                        <p className='gridP'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, perspiciatis illum facere facilis porro commodi in magni ea. Veniam unde facere animi corporis rerum ullam praesentium dolor? Asperiores, fugit praesentium?</p>
                    </div>
                </article>
                <article>
                    <img className='icon' src="./src/assets/imgs/object-select.svg" alt="icon" />
                    <div>
                        <h4>Illustration</h4>
                        <p className='gridP'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem eveniet necessitatibus quod nobis iure reprehenderit, perspiciatis esse dicta eum! Ad cumque cum ratione ea reprehenderit. Voluptatem sunt repellendus maiores autem!</p>
                    </div>
                   
                </article>
                <article>
                    <img className='icon' src="./src/assets/imgs/megaphone.svg" alt="icon" />
                    <div>
                        <h4>Marketing</h4>
                        <p className='gridP'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam autem impedit, voluptatibus cum aspernatur sed obcaecati excepturi officiis quo laborum odit nemo mollitia in tempora dolor eum dolorum asperiores! Voluptate!</p>
                    </div>
                </article>
                <article>
                    <img className='icon' src="./src/assets/imgs/globe-line.svg" alt="icon" />
                    <div>
                        <h4>Web Design</h4>
                        <p className='gridP'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque commodi officia fuga illum dolores et. Sit, deleniti! Corporis voluptate iure obcaecati quibusdam exercitationem delectus nulla quae? Illum mollitia consequuntur cum.</p>
                    </div>
                </article>
            </section>
        </main>
     );
}
 
export default MiddleMain;