import { UserCog } from "lucide-react"
import { Button } from "../../components/button"
import { Guests } from "./guests"
import { useState } from "react"
import { CreateInvateModal } from "./create-guest-modal"

export const ManegeGuest = () => {
    const [isCreateInvateModalOpen, setIsCreateInvateModalOpen] = useState(false)

    const openCreateInvateModal = () => {
        setIsCreateInvateModalOpen(true)
    }

    const closeCreateInvateModal = () => {
        setIsCreateInvateModalOpen(false)
    }
    
    return(
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Convidados</h2>

            <Guests/>

            <Button onClick={openCreateInvateModal} variant="secondary" size="full">
                <UserCog className="size-5" />
                Gerenciar convidados
            </Button>

            {isCreateInvateModalOpen && (
                <CreateInvateModal
                closeCreateInvateModal={closeCreateInvateModal}/>
            )}
        </div>
    )
}