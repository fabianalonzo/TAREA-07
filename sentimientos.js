const suscriptionkey = ""
const endpoint = ""

const URL = `${endpoint}/language/:analyze-text?api-version=2023-04-01`

async function analizarSentimientos(){
    try {
        
        // Podemos enviar mas de un documento
        const documentoAnlizar = {
            kind: "SentimentAnalysis",
            analysisInput: {
                documents: [
                    {
                        id: "1",
                        language: "es",
                        text: "Estoy muy contento porque obtuve una promocion y un descuento en mi proxima compra"
                    },
                    {
                        id: "2",
                        language: "es",
                        text: "Estoy muy frustrado, el sistema de ventas fallo y perdimos tiempo y dinero en el proceso"
                    },
                    {
                        id: "3",
                        language: "es",
                        text: "Mientras la luna cubria su bello rostro, ella rompio a llorar oy se murieron los 2"
                    }
                ]// contenedor de todos los documentos
            }
        } // documentosAnalizar 

        console.log("Enviando multilpes documento a Azure...")
        
        const response = await fetch(URL,{
             method: 'POST',
            headers:{
                "Ocp-Apim-Subscription-Key": suscriptionkey,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(documentoAnlizar)
        })

        if(!response.ok){
            const errorData = await response.json()
			throw new Error(errorData.error.message)
		}

        const data = await response.json()
        console.log(data)

        // Enviando los resultados
        data.results.documents.forEach(document => {
            // Se muestra el id de cada documento
            console.log(`Documento # ${document.id}`)

            // Contenido analizado
            const contenidoOriginal = documentoAnlizar.analysisInput.documents.find(d => d.id === document.id).text

            console.log(contenidoOriginal)

            //PUNTUACIONES DE CONFIANZA
            const scores = document.confidenceScores
            console.log("Puntuaciones de confianza:")
            console.log(`- positivo: ${scores.positive}`)
            console.log(`- negativo: ${scores.negative}`)
            console.log(`- neutral: ${scores.neutral}`)
        });

    } catch (error) {
        console.error(error.message)
    }
}
analizarSentimientos()