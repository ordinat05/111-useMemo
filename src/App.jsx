import React, { useState, useMemo } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  const memorizedCountString = useMemo(() => {
    return `Count is: ${count}`
  }, [count])

  return (
    <div className="App">
      {/* 🍀 This Component App.jsx */}
      <h1>UseEffect Test</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p> Name : {name} </p>
      <br />
      <br />
      <h1>UseMemo Usage Example</h1>
      <br />
      <button onClick={() => setCount(count + 1)}>
        {memorizedCountString} </button>
      <br />
      <h3>useMemo nedir?</h3>
      <br />
      <p></p>
      <div>
        <p>
          useMemo tıpkı memo gibi hook her render anında çalışması gereken işlevleri hafızaya almayı ve aldığı ikinci parametrede verilen değerler üzerinden bir işlevi tekrar çağırmayı ya da hafızadaki değeri kullanabilmeyi sağlar. Bu da tıpkı memo gibi bir performans optimizasyonu imkanı sunar.</p>
        <br />
        <p> Örneğin bir array içerisinde filter ve map kullanmak durumunda kaldığımız bir örnek üzerinden gidelim.</p>
        <br />
        <p>Bir örnek üzerinden kullanımına göz atalım.</p>
        <br />
        <p>  Aşağıdaki gibi verilen sayı kadar bi sayı listesi oluşturan ve listenin her elemanınıda checkbox ile seçebileceğimiz bir örnek üzerinden gidelim. Bu örnekte checkedNumbers statei checkbox a her tıklanıldığında değişecek. Bu durumda da getArray işlevi her seferinde çağrılacak. Ve konsolda koşan adam emojisini her seferinde görüyor olacağız.</p>


      </div>
    </div>
  )
}

export default App
