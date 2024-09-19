import { Mail, User, X } from "lucide-react"
import { Button } from "../../components/button"
import { api } from "../../lib/axios"
import { FormEvent } from "react"
import { useParams } from "react-router-dom"

interface CreateInvateModalProps {
    closeCreateInvateModal: () => void
}

export const CreateInvateModal = ({
    closeCreateInvateModal,
}: CreateInvateModalProps) => {
    const { tripId } = useParams()

    const createInvate = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const data = new FormData(event.currentTarget)

        const email = data.get('email')?.toString()
        
        await api.post(`/trips/${tripId}/invites`, {
            email,
        })
        
        window.document.location.reload()
    }
    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[648px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-lg font-semibold'>Cadastrar Convidado</h2>
                    <button>
                        <X className="size-5 text-zinc-400" onClick={closeCreateInvateModal} />
                    </button>
                </div>  
                    <p className='text-sm text-zinc-400'>
                    Para convidar algum para <span className='font-semibold text-zinc-100'>Florianópolis, Brasil</span> nas datas de <span className='font-semibold text-zinc-100'>16 a 27 de Agosto de 2024</span> preencha os dados abaixo:
                    </p>            
                </div>

                <form onSubmit={createInvate} className='space-y-3'>
                <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2'>
                    <User className='text-zinc-400 size-5'/>
                    <input name='name' placeholder="Nome completo" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1" 
                    />
                </div>

                <div className='h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2'>
                    <Mail className='text-zinc-400 size-5'/>
                    <input type="email" name='email' placeholder="E-mail do convidado" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"
                    />
                </div>
                    
                <Button type="submit" size="full">
                    Confirmar convite da viagem
                </Button>
                </form>
            </div>
        </div>
    )
}