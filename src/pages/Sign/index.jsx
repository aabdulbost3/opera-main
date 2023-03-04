import './style.css';

function SignPage() {
    const HandleSubmit = () => {
        
    }
  return (
    <div className="SignPage">
        <form onSubmit={HandleSubmit} className="SignModal">
            <h1>Log in</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ea omnis cumque reprehenderit dolores quo ullam magnam nam, numquam molestiae.</p>
            <input type="text" placeholder='Ismingizni kiriting' className='ins'/>
            <input type="text" placeholder='Parolingizni kiritng' className='ins'/>
            <button type='submit'>Sign in</button>
        </form>
    </div>
  );
}

export default SignPage;