import React from "react";

const Rumores = () => {
  return (
    <section className="rumores">
      <h3>Rumores shows 2023</h3>
      <div className="span_container">
        <span>
          O Brasil está recheado de grandes eventos e festivais de música, com o
          Lollapalooza Brasil sendo um dos principais deles, e apesar de sua
          próxima edição estar com data marcada para ocorrer ano que vem, muitas
          novidades estão sendo reveladas e teorizadas em relação ao evento
          paulistano. <br />
          Representando a música brasileira, tivemos a confirmação de nomes como
          L7nnon, que já havia subido ao palco na edição passada a convite de
          Jack Harlow; Ludmilla, que vem de um show histórico no Rock in Rio; Os
          Paralamas do Sucesso, Pitty, Tuyo e muitas outras atrações. O
          Lollapalooza costuma ser um festival muito aberto a música
          alternativa, privilegiando artistas de nichos pouco contemplados em
          outros grandes palcos Brasil afora.
        </span>
      </div>

      <div className="container_rumores_img">
        <div>
          <img
            src="https://conteudo.imguol.com.br/c/entretenimento/4d/2020/01/27/billie-eilish-levou-seis-premios-em-sua-estreia-no-grammy-1580102965339_v2_3x4.jpg"
            alt=""
          />
          <p>Billie Eilish</p>
        </div>
        <div>
          <img
            src="https://i.guim.co.uk/img/media/558d646571cdbabc483243366c18d3f6f297fded/236_0_4466_2679/master/4466.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a4e1534c590f30a8fe3119747b762ec5"
            alt=""
          />
          <p>lil nas X</p>
        </div>
        <div>
          <img
            src="https://capricho.abril.com.br/wp-content/uploads/2019/01/drake.jpg"
            alt=""
          />
          <p>Drake</p>
        </div>
      </div>
    </section>
  );
};

export default Rumores;
