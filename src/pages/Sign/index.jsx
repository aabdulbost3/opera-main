import './style.css';

function SignPage() {
  return (
    <div className="SignPage">
        <form className="SignModal">
            <h1>Log in</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ea omnis cumque reprehenderit dolores quo ullam magnam nam, numquam molestiae.</p>
            <input type="text" placeholder='Ismingizni kiriting' className='ins'/>
            <input type="text" placeholder='Parolingizni kiritng' className='ins'/>
            <button>Sign in</button>
        </form>
    </div>
  );
}

export default SignPage;