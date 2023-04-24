import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import useNews from '../hooks/useNews'
const categorys = [
    {value:'general', label:'General'},
    {value:'business', label:'Negocios'},
    {value:'entertainment', label:'Entretenimiento'},
    {value:'health', label:'Salud'},
    {value:'science', label:'Ciencia'},
    {value:'sports', label:'Deportes'},
    {value:'technology', label:'Tecnologia'},
]

export default function FormSelector() {

    const {category, handleChangeCategory} = useNews()
    return (
        <form action="">
            <FormControl fullWidth>
                <InputLabel> Categoria </InputLabel>
                    <Select label='Categoria' onChange={handleChangeCategory} value={category}>
                        {categorys.map((item) => (
                            <MenuItem key={item.value} value={item.value} >
                                {item.label}
                            </MenuItem>
                        ))}
                    </Select>
                    
            </FormControl>
        </form>
    )
}
