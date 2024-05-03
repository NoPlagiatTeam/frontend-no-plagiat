import {CustomInput} from "../../atoms/index.js";
import {IoMdLock} from "react-icons/io";

function UpdatePassword() {
    return (
        <div className={`flex flex-col md:w-1/2 md:pl-12`}>
            <div className={`bg-white p-10`}>
                <div className={`container flex justify-center items-center `}>
                    <div className={`group relative flex justify-center w-full pb-4`}>
                        {" "}
                        <button
                            className={`relative rounded-lg border border-orange-500 px-7 py-4 text-orange-500 w-full `}>
                            S'inscrire
                        </button>
                    </div>
                </div>
                <div className={`container flex justify-center items-center `}></div>
                <div className={`pb-9`}>
                    <CustomInput
                        placeholder="Entrez votre mot de passe"
                        icon={<IoMdLock/>}
                        name="ancien mot de passe"
                    />
                </div>
                <div className={`pb-9`}>
                    <CustomInput
                        placeholder="Entrez votre mot de passe"
                        icon={<IoMdLock/>}
                        name="nouveau mot de passe"
                    />
                </div>
                <div className={`pb-9`}>
                    <CustomInput
                        placeholder="Entrez votre mot de passe"
                        icon={<IoMdLock/>}
                        name="Contrimer votre password"
                    />
                </div>

                <button
                    type="submit"
                    className={`text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-base px-5 py-2.5`}
                >
                    {" "}
                    Changer{" "}
                </button>
            </div>
        </div>
    )
}

export default UpdatePassword