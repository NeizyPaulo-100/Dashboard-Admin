import React from "react";
import TabalaDosRecentes from "../components/tabelas/TabelaDosRecentes";
import MelhoresProdutos from "../components/tabelas/MelhoresProdustos";

export default function SessaodasTabelas() {

    return (
        <section className="space-y-6">
            <TabalaDosRecentes />
            <MelhoresProdutos />
        </section>
    )
}
