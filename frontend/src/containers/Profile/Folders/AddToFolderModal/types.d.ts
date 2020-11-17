import {WithStyles} from "@material-ui/core";
import {FolderActions} from '../types';

import styles from "./AddToFolderModal.styles";

export interface AddToFolderModalProps extends WithStyles<typeof styles> {
    actions: FolderActions;
    isOpen: boolean;
}