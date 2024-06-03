import "./blogDetails.css"
import { useEffect } from "react"

const BlogDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="section container">
            <div className="blog-details-img">
                <img src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fekafo0k2y31voj2s1e0p.png" alt="blog-image" />
            </div>
            <div>
                <h1 className="blog-details-title">Title</h1>
                <p className="blog-short-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptatibus consequatur esse labore, beatae consequuntur quaerat qui dolor, facilis assumenda odit quos dolorem rem perspiciatis quod eveniet deserunt vitae eos nihil. Provident ullam praesentium dolores veniam iure magni, rem modi molestias ratione consectetur consequuntur! Explicabo totam voluptatum laudantium vero natus perferendis obcaecati, ipsa odio, reiciendis architecto officia iure temporibus esse magni? Esse voluptatibus error optio sit possimus officia assumenda qui repudiandae, a dicta, vero consequatur, sequi nobis animi. Nemo amet vel libero pariatur suscipit magni, aliquam perferendis facilis eaque veniam officia, ad, non soluta quaerat. Perspiciatis odio itaque molestias mollitia aut quisquam numquam illo optio, voluptate ullam iste earum consequatur laborum distinctio cum eveniet facere. Sed dolore quasi ad eos similique unde sit, molestias saepe numquam totam, et tempora error ipsa dolor magni dolorum quaerat inventore natus, quisquam quibusdam eligendi commodi odio explicabo? Cupiditate omnis neque ipsum, architecto laboriosam dolores impedit, consequuntur eius commodi mollitia aspernatur consectetur similique vel? Aut magnam, inventore fugit commodi accusantium cumque labore harum, voluptate corporis mollitia quidem cupiditate voluptatibus laboriosam accusamus iste voluptas aperiam ipsa qui nulla nemo? Libero fuga doloremque nostrum ea commodi. Quis nam eum delectus nobis repellat sint quo quos! Modi, nesciunt.</p>
            </div>
        </section>
    );
};

export default BlogDetails;