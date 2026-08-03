"use client"

import { useState } from "react"
import { ChevronDown, MapPin } from "lucide-react"
import { COLORS } from "@/constants/colors"
import Modal from "../ui/Modal"

const COUNTRIES = [
    "Serbia",
    "Hungary",
    "Romania",
    "Bulgaria",
    "North Macedonia",
    "Montenegro",
    "Bosnia and Herzegovina",
    "Croatia",
    "Slovenia",
    "Albania",
]

interface AddressModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function AddressModal({ isOpen, onClose }: AddressModalProps) {
    const [country, setCountry] = useState("Serbia")
    const [street, setStreet] = useState("")

    const handleContinue = () => {
        // TODO: replace with real address submission once this is wired
        // up to the backend / saved address list.
        onClose()
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <style>{`
                .qb-field {
                    background-color: rgba(251,246,237,0.05);
                    color: ${COLORS.paper};
                }
                .qb-field:focus {
                    outline: none;
                    box-shadow: 0 0 0 2px ${COLORS.ember};
                }
                .qb-field option {
                    background-color: ${COLORS.card};
                    color: ${COLORS.paper};
                }
            `}</style>

            <div className="flex flex-col gap-5">
                <p className="qb-display text-lg sm:text-xl" style={{ color: COLORS.paper }}>
                    Add new address
                </p>

                {/* Country */}
                <div className="flex flex-col gap-1.5">
                    <label
                        htmlFor="country"
                        className="qb-body text-xs font-semibold uppercase tracking-wide"
                        style={{ color: COLORS.smoke }}
                    >
                        Country
                    </label>

                    <div className="relative">
                        <select
                            id="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="qb-body w-full appearance-none rounded-lg border px-3 py-2.5 pr-10 text-sm outline-none transition focus:border-[#FF4B2E] focus:ring-2 focus:ring-[#FF4B2E]/25"
                            style={{
                                backgroundColor: COLORS.card,
                                borderColor: COLORS.border,
                                color: COLORS.paper,
                            }}
                        >
                            {COUNTRIES.map((c) => (
                                <option key={c} value={c}>
                                    {c}
                                </option>
                            ))}
                        </select>

                        <ChevronDown
                            size={16}
                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                            style={{ color: COLORS.smoke }}
                        />
                    </div>
                </div>

                {/* Street — Google Places Autocomplete target */}
                <div className="flex flex-col gap-1.5">
                    <label
                        htmlFor="street"
                        className="qb-body text-xs font-semibold uppercase tracking-wide"
                        style={{ color: COLORS.smoke }}
                    >
                        Street name and number
                    </label>
                    <div className="relative">
                        <input
                            id="street"
                            type="text"
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                            placeholder="e.g. Knez Mihailova 12"
                            autoComplete="off"
                            // TODO: attach Google Places Autocomplete
                            // (PlaceAutocompleteElement) to this input once
                            // the API key + script are added.
                            className="qb-body qb-field w-full rounded-lg border py-2.5 pl-3 pr-10 text-sm"
                            style={{ borderColor: COLORS.border }}
                        />
                        <MapPin
                            size={16}
                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                            style={{ color: COLORS.mustard }}
                        />
                    </div>
                </div>

                {/* Continue */}
                <button
                    type="button"
                    onClick={handleContinue}
                    className="qb-body w-full rounded-lg py-2.5 text-sm font-semibold text-white transition-transform active:scale-[0.98] cursor-pointer"
                    style={{ backgroundColor: COLORS.ember }}
                >
                    Continue
                </button>

                <div 
                    className="w-75 h-80 bg-cover bg-center mx-auto mt-5"
                    style={{ backgroundImage: `url(/images/address/address.png)` }} 
                    
                />
            </div>
        </Modal>
    )
}