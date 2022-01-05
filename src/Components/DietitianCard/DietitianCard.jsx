import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';


export default function DietitianCard({ data, isEditMode, handleDelete, handleEdit }) {
  if (!data) return <div></div>
  const renderLanguage = () => {
    return data.language.map((item) => { return <span key={item}>{item} </span> })
  }
  const renderExpertise = () => {
    return data.dietExpertise.map((item) => { return <span key={item}>{item} </span> })
  }
  console.log(data);
  return (
    <Card sx={{ minWidth: 275, margin: 1.2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography color="text.secondary">
          {renderLanguage()}
        </Typography>
        <Typography variant="body2">
          {renderExpertise()}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {data.hmo} - {data.city}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {data.phone}
        </Typography>
      </CardContent>
      {isEditMode &&
        <CardActions>
          <IconButton aria-label="delete" onClick={() => handleDelete(data.id)}>
            <DeleteIcon />
          </IconButton>
          <Link to={`/edit`}>
            <IconButton aria-label="delete" onClick={() => handleEdit(data)} >
              <EditIcon />
            </IconButton>
          </Link>
        </CardActions>}
    </Card>
  );
}
