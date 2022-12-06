function LoggerButton() {
  function logClick() {
    console.log('The React button was clicked')
  };
  return <button onClick={logClick}> Click me </button>
}