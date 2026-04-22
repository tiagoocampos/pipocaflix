import { useState } from "react";
import { Spinner } from "../components/ui/spinner";

export function useLoading(initialValue = false) {
    const [loading, setLoading] = useState(initialValue)

    function startLoading() {
        setLoading(true)
    }

    function stopLoading() {
        setLoading(false)
    }
    return { loading, startLoading, stopLoading }
}