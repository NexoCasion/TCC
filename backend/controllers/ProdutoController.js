const Produto = require('./../models/Produto')

module.exports = class ProdutosController{
    static async getAll(req,res){
        try {
            const todosProdutos = await Produto.find()
            res.json(todosProdutos)
        }catch(error){
            console.log(error)
            res.status(500).json({message: "Erro ao pegar produtos"})
        }
    }
    static async createProduto(req,res){
        try {
            const {nome, price, desc, quantidade, imageUrl} = req.body;
            if(!price){
                return res.status(406).json({message:"preço é obrigatorio"})
            } 
            const novoProduto = new Produto({nome, price, desc, quantidade, imageUrl})
            await novoProduto.save()
            res.json(novoProduto)
        }catch(error){
            console.log(error)
            res.status(500).json({message: "Erro ao criar produtos"})
        }
    }
    static async editProduct(req,res){
        try {
            const {nome,price,desc,quantidade,imageUrl} = req.body;
            const produto = await Produto.findByIdAndUpdate(
                req.params.id,
                {nome,price,desc,imageUrl} ,
                {new: true}
            );
            if(!produto){
                return res.status(404).json({message: "este produto não existe"})
            }
            res.json(produto);
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Erro ao editar o produto."})
        }
    }
    static async deleteProduto(req,res){
        try {
            const produto = await Produto.findByIdAndRemove(req.params.id)
            if(!produto){
                return res.status(404).json({message: "Não existe um produto com este id"})
            }
            res.json({message: "Produto deletado com sucesso!"})
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Erro ao deletar o produto."})
        }
    }
}