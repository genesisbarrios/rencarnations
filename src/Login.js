const Login = (props) => {
    let deso = props.deso;
    let callbackFunction = props.parentCallback;

    const tableStyle = {
        backgroundColor: '##192026'
    };

    return (
        <button
            onClick={async () => {
                const user = await deso.identity.login();
                console.log(user);
                callbackFunction(JSON.stringify(user, null, 2));
            }}
            >
            login
        </button>
    );
          
};

export default Login;
