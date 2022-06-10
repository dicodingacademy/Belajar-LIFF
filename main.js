import './style.css';
import { loadCatatan, editData, lihatData, simpanData, simpanEditData, hapusData, gantiMenu } from './catatan-config';
import { liffStarter } from './liff-config';

window.loadCatatan = loadCatatan;
window.editData = editData;
window.lihatData = lihatData;
window.simpanData = simpanData;
window.simpanEditData = simpanEditData;
window.hapusData = hapusData;
window.gantiMenu = gantiMenu;

window.onload = liffStarter;
