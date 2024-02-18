import Navbar from './Navbar';
// import Introduction from './introduction'
// import Profile from './profile';
// import Footer from './Footer';
// import Button from './Button';
import React, { useState, useEffect, useRef } from 'react';

function Home() {
  // const [getNavbarMenuValue, setNavbarMenuValue] = useState("")
  const [pacarSaya, setPacarSaya] = useState(1);
  const [namaPacar, setNamaPacar] = useState('');

  const linkRef = useRef(null);

  const kurangiPacar = () => {
    if (pacarSaya < 1) {
      setPacarSaya((prev) => prev - 0);
      alert('Sudah tidak bisa dikurangi');
    } else {
      setPacarSaya((prev) => prev - 1);
    }
  };

  useEffect(() => {
    setNamaPacar('Blablabla');
    console.log('testing');
  }, []);

  const goto = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth'
    })
  }
  //   const klikButton = () => {
  //   setNavbarMenuValue("Contact");
  // }

  console.log(linkRef.current);

  return (
    <div>
      <Navbar />
      <div onClick={() => goto(linkRef.current)}>
      <h1>React</h1>
      </div>
      <h3>Nama Pacar: {namaPacar}</h3>
      <h1>Pacar saya sebanyak: {pacarSaya}</h1>
      <button onClick={() => setPacarSaya((prev) => prev + 1)}> Tambah Pacar</button>
      <button onClick={() => kurangiPacar()}> Kurang Pacar</button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint qui excepturi quasi! Quisquam voluptatum iusto possimus minus beatae ducimus dolorum delectus, mollitia unde libero sint. Error modi soluta illum temporibus. Neque
        dolorum totam dolor repellendus, exercitationem quidem corrupti voluptate debitis et explicabo libero doloribus dicta ipsum, eos ex, sapiente quas fuga voluptatum dolores cum minus iure quaerat officiis placeat. Eveniet. Fugit,
        voluptatibus hic culpa neque rerum, dolores tempore voluptatum totam quaerat illo odit libero commodi quia harum dolorum? Iure laboriosam, iste labore aut animi autem sapiente! Iusto molestiae dolores doloribus? Aperiam, adipisci
        nulla voluptas error enim earum pariatur dicta, vero, praesentium laborum velit voluptates explicabo? Veritatis culpa hic rerum! Earum vel laborum cumque sed! Blanditiis temporibus ratione dignissimos obcaecati voluptatibus? Magnam
        nobis odio assumenda atque perspiciatis sit consectetur itaque officia? Aperiam, quo! Repudiandae quia debitis repellendus recusandae quisquam cumque libero? Repellendus ad molestias laborum atque tempore? Aperiam vel quidem
        consectetur. Fugiat commodi blanditiis vel recusandae, temporibus animi totam aspernatur harum, nobis labore doloribus deserunt, quos tempore quasi velit suscipit. Voluptatibus repellat odio esse obcaecati consequatur temporibus
        nesciunt nisi reprehenderit dolorum? Perferendis optio eius molestiae nam voluptates asperiores aut ut similique. Possimus sunt dolorum fuga debitis doloremque rem modi. Magnam repellat voluptatem quis! Saepe laborum ut ex
        reprehenderit quisquam commodi maiores. Veritatis voluptatem consequuntur blanditiis aperiam dolore, tenetur nobis, cum iure voluptate ab velit porro laborum, sequi dignissimos saepe eius non aut obcaecati. Laboriosam itaque quos
        quia, libero vel nobis consectetur! Consequatur ullam perspiciatis, itaque quae maiores expedita ducimus rem deleniti ipsum deserunt repellendus mollitia porro. Voluptatum, quas a. Laborum officia porro nemo vel, repellat aspernatur
        obcaecati ut facere ullam possimus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint qui excepturi quasi! Quisquam voluptatum iusto possimus minus beatae ducimus dolorum delectus, mollitia unde libero sint. Error modi soluta illum temporibus. Neque
        dolorum totam dolor repellendus, exercitationem quidem corrupti voluptate debitis et explicabo libero doloribus dicta ipsum, eos ex, sapiente quas fuga voluptatum dolores cum minus iure quaerat officiis placeat. Eveniet. Fugit,
        voluptatibus hic culpa neque rerum, dolores tempore voluptatum totam quaerat illo odit libero commodi quia harum dolorum? Iure laboriosam, iste labore aut animi autem sapiente! Iusto molestiae dolores doloribus? Aperiam, adipisci
        nulla voluptas error enim earum pariatur dicta, vero, praesentium laborum velit voluptates explicabo? Veritatis culpa hic rerum! Earum vel laborum cumque sed! Blanditiis temporibus ratione dignissimos obcaecati voluptatibus? Magnam
        nobis odio assumenda atque perspiciatis sit consectetur itaque officia? Aperiam, quo! Repudiandae quia debitis repellendus recusandae quisquam cumque libero? Repellendus ad molestias laborum atque tempore? Aperiam vel quidem
        consectetur. Fugiat commodi blanditiis vel recusandae, temporibus animi totam aspernatur harum, nobis labore doloribus deserunt, quos tempore quasi velit suscipit. Voluptatibus repellat odio esse obcaecati consequatur temporibus
        nesciunt nisi reprehenderit dolorum? Perferendis optio eius molestiae nam voluptates asperiores aut ut similique. Possimus sunt dolorum fuga debitis doloremque rem modi. Magnam repellat voluptatem quis! Saepe laborum ut ex
        reprehenderit quisquam commodi maiores. Veritatis voluptatem consequuntur blanditiis aperiam dolore, tenetur nobis, cum iure voluptate ab velit porro laborum, sequi dignissimos saepe eius non aut obcaecati. Laboriosam itaque quos
        quia, libero vel nobis consectetur! Consequatur ullam perspiciatis, itaque quae maiores expedita ducimus rem deleniti ipsum deserunt repellendus mollitia porro. Voluptatum, quas a. Laborum officia porro nemo vel, repellat aspernatur
        obcaecati ut facere ullam possimus.
      </p>
      <a 
        target="_blank" 
        href="https://reactjs.org" 
        rel="noopener noreferrer" 
        ref={linkRef}> Klik Link
      </a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint qui excepturi quasi! Quisquam voluptatum iusto possimus minus beatae ducimus dolorum delectus, mollitia unde libero sint. Error modi soluta illum temporibus. Neque
          dolorum totam dolor repellendus, exercitationem quidem corrupti voluptate debitis et explicabo libero doloribus dicta ipsum, eos ex, sapiente quas fuga voluptatum dolores cum minus iure quaerat officiis placeat. Eveniet. Fugit,
          voluptatibus hic culpa neque rerum, dolores tempore voluptatum totam quaerat illo odit libero commodi quia harum dolorum? Iure laboriosam, iste labore aut animi autem sapiente! Iusto molestiae dolores doloribus? Aperiam, adipisci
          nulla voluptas error enim earum pariatur dicta, vero, praesentium laborum velit voluptates explicabo? Veritatis culpa hic rerum! Earum vel laborum cumque sed! Blanditiis temporibus ratione dignissimos obcaecati voluptatibus? Magnam
          nobis odio assumenda atque perspiciatis sit consectetur itaque officia? Aperiam, quo! Repudiandae quia debitis repellendus recusandae quisquam cumque libero? Repellendus ad molestias laborum atque tempore? Aperiam vel quidem
          consectetur. Fugiat commodi blanditiis vel recusandae, temporibus animi totam aspernatur harum, nobis labore doloribus deserunt, quos tempore quasi velit suscipit. Voluptatibus repellat odio esse obcaecati consequatur temporibus
          nesciunt nisi reprehenderit dolorum? Perferendis optio eius molestiae nam voluptates asperiores aut ut similique. Possimus sunt dolorum fuga debitis doloremque rem modi. Magnam repellat voluptatem quis! Saepe laborum ut ex
          reprehenderit quisquam commodi maiores. Veritatis voluptatem consequuntur blanditiis aperiam dolore, tenetur nobis, cum iure voluptate ab velit porro laborum, sequi dignissimos saepe eius non aut obcaecati. Laboriosam itaque quos
          quia, libero vel nobis consectetur! Consequatur ullam perspiciatis, itaque quae maiores expedita ducimus rem deleniti ipsum deserunt repellendus mollitia porro. Voluptatum, quas a. Laborum officia porro nemo vel, repellat aspernatur
          obcaecati ut facere ullam possimus.
        </p>

      {/* <Navbar contactNavbar= {getNavbarMenuValue}/> */}
      {/* <Profile />
            <Introduction hobi="coding" />
            <Introduction hobi="main game" />
            <button onClick={() => klikButton()}>Klik</button>
            <Button klik= {() => klikButton()} />
            <Footer /> */}
    </div>
  );
}

export default Home;
