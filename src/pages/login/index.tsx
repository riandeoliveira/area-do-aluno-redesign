import { HeadArea } from "components";
import type { NextPage } from "next";
import Image from "next/image";
import { Button, Form } from "react-bootstrap";
import styles from "./styles.module.scss";

const Login: NextPage = (): JSX.Element => {
  return (
    <>
      <HeadArea />
      <div className={styles.background}>
        <div className={styles.layout}>
          <div className={styles.container}>
            <header className={styles.header}>
              <Image
                src="/assets/icons/logo.svg"
                alt="Estrela opaca com contorno amarelo do lado esquerdo do título: Universidade Cruzeiro do Sul"
                width={470}
                height={100}
              />
            </header>
            <form className={styles.form}>
              <div className={styles.input_container}>
                <Form.Control
                  type="number"
                  className={styles.input}
                  placeholder="Seu RGM"
                  required
                />
                <Form.Control
                  type="password"
                  className={styles.input}
                  placeholder="Sua senha"
                  required
                />
              </div>
              <div className={styles.button_container}>
                <Button variant="" type="submit" className={styles.button}>
                  Blackboard
                </Button>
                <Button variant="" type="submit" className={styles.button}>
                  Área do Aluno
                </Button>
              </div>
              <div className={styles.links_container}>
                <a href="#" className={styles.link}>
                  Esqueci meu RGM
                </a>
                <a href="#" className={styles.link}>
                  Esqueci minha senha
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
