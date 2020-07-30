import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import dadosIniciais from './components/dados_iniciais.json';
import Carousel from './components/Carousel';
import Footer from './components/Footer';


function App() {
  return (
    <div style={{background:"#141414"}}>
         <Menu/>
         <BannerMain
            videoTitle={dadosIniciais.categorias[0].videos.titulo}
            url={dadosIniciais.categorias[5].videos[1].url}
            videoDescription={'Vídeo explicativo sobre a maior dúvida de quem procura entrar na área da programação, "É preciso fazer faculdade para aprender a progamar?"'}
         />

         <Carousel
            ignoreFirstVideo
            category={dadosIniciais.categorias[5]}
         />


          <Carousel
            ignoreFirstVideo
            category={dadosIniciais.categorias[0]}
         />

          <Carousel
            ignoreFirstVideo
            category={dadosIniciais.categorias[1]}
         />

          <Carousel
            ignoreFirstVideo
             category={dadosIniciais.categorias[2]}
         />

          <Carousel
            ignoreFirstVideo
            category={dadosIniciais.categorias[3]}
         />

          <Carousel
            ignoreFirstVideo
            category={dadosIniciais.categorias[4]}
         />


        <Footer/>
    </div>
  );
}


export default App;
