import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      {/* Ques 1 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5"> An Important Question</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur, eaque incidunt repellat sint, enim placeat eveniet id illo omnis tempore esse rerum earum nobis doloribus corrupti in quos sit.
                Reprehenderit eum adipisci enim totam. Nobis numquam autem distinctio debitis tempora culpa. Dolorum ipsa temporibus commodi explicabo alias, id itaque voluptate corporis ipsam soluta exercitationem qui delectus accusantium nemo atque.
                A ex, tempore iusto voluptas amet quae, asperiores praesentium dicta debitis culpa excepturi reprehenderit dignissimos beatae aperiam ullam libero deleniti quas aliquid repellendus nesciunt alias. Reiciendis aliquam blanditiis earum laboriosam.
            </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Ques 2 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5"> Your Favorite Question</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur, eaque incidunt repellat sint, enim placeat eveniet id illo omnis tempore esse rerum earum nobis doloribus corrupti in quos sit.
                Reprehenderit eum adipisci enim totam. Nobis numquam autem distinctio debitis tempora culpa. Dolorum ipsa temporibus commodi explicabo alias, id itaque voluptate corporis ipsam soluta exercitationem qui delectus accusantium nemo atque.
                A ex, tempore iusto voluptas amet quae, asperiores praesentium dicta debitis culpa excepturi reprehenderit dignissimos beatae aperiam ullam libero deleniti quas aliquid repellendus nesciunt alias. Reiciendis aliquam blanditiis earum laboriosam.
            </Typography>
        </AccordionDetails>
      </Accordion>
        
        {/* Ques 3 */}
        <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5"> Some Random Question</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur, eaque incidunt repellat sint, enim placeat eveniet id illo omnis tempore esse rerum earum nobis doloribus corrupti in quos sit.
                Reprehenderit eum adipisci enim totam. Nobis numquam autem distinctio debitis tempora culpa. Dolorum ipsa temporibus commodi explicabo alias, id itaque voluptate corporis ipsam soluta exercitationem qui delectus accusantium nemo atque.
                A ex, tempore iusto voluptas amet quae, asperiores praesentium dicta debitis culpa excepturi reprehenderit dignissimos beatae aperiam ullam libero deleniti quas aliquid repellendus nesciunt alias. Reiciendis aliquam blanditiis earum laboriosam.
            </Typography>
        </AccordionDetails>
      </Accordion>

         {/* Ques 4 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5"> The Final Question</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur, eaque incidunt repellat sint, enim placeat eveniet id illo omnis tempore esse rerum earum nobis doloribus corrupti in quos sit.
                Reprehenderit eum adipisci enim totam. Nobis numquam autem distinctio debitis tempora culpa. Dolorum ipsa temporibus commodi explicabo alias, id itaque voluptate corporis ipsam soluta exercitationem qui delectus accusantium nemo atque.
                A ex, tempore iusto voluptas amet quae, asperiores praesentium dicta debitis culpa excepturi reprehenderit dignissimos beatae aperiam ullam libero deleniti quas aliquid repellendus nesciunt alias. Reiciendis aliquam blanditiis earum laboriosam.
            </Typography>
        </AccordionDetails>
      </Accordion>

         {/* Ques 5 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5"> Other Question</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur, eaque incidunt repellat sint, enim placeat eveniet id illo omnis tempore esse rerum earum nobis doloribus corrupti in quos sit.
                Reprehenderit eum adipisci enim totam. Nobis numquam autem distinctio debitis tempora culpa. Dolorum ipsa temporibus commodi explicabo alias, id itaque voluptate corporis ipsam soluta exercitationem qui delectus accusantium nemo atque.
                A ex, tempore iusto voluptas amet quae, asperiores praesentium dicta debitis culpa excepturi reprehenderit dignissimos beatae aperiam ullam libero deleniti quas aliquid repellendus nesciunt alias. Reiciendis aliquam blanditiis earum laboriosam.
            </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
