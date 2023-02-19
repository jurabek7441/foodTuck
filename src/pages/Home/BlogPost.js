import CardPhoto1 from './photo/blogPost1.png'
import CardPhoto2 from './photo/blogPost2.png'
import CardPhoto3 from './photo/blogPost3.png'
import {AiOutlineLike} from 'react-icons/ai'
import {RiMessage2Line} from 'react-icons/ri'
import {HiOutlineShare} from 'react-icons/hi'

export const BlogPost =()=>{
    let blogPost_data=[
        {
            id: 1, photo: CardPhoto1, date: "10 February 2022 ", title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis"
        },
        {
            id: 2, photo: CardPhoto2, date: "10 February 2022 ", title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A"
        },
        {
            id: 3, photo: CardPhoto3, date: "10 February 2022 ", title: "Curabitur rutrum velit ac congue malesuada"
        }
    ]
    return(
        <div className="blog_post">
            <h3>Blog Post</h3>
            <h2><span>La</span> test News & Blog</h2>
            <div className="blogPost_content">
                {
                    blogPost_data.map((item, index)=>(
                        <div className="blogPost_card" key={item.id}>
                            <figure><img src={item.photo} alt=""/></figure>
                                <div className="card_text">
                                    <h6>{item.date}</h6>
                                    <h4>{item.title}</h4>
                                    <div className="learn_iconBox">
                                        <p>Learn More</p>
                                        <div className="icons">
                                        <i className='like'><AiOutlineLike/></i>
                                        <i className='message'><RiMessage2Line/></i>
                                        <i className='share'><HiOutlineShare/></i>
                                        </div>
                                    </div>
                                </div>

                        </div>
                    ))
                        
                }
            
            </div>
        </div>        
    )
}