import {
	Avatar,
	Button,
	Card,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import * as React from 'react';
import cardStyles from "../team.module.css";
import LanguageIcon from "@mui/icons-material/Language";
import AndroidIcon from "@mui/icons-material/Android";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import style from "../team.module.css";
import Link from "@mui/material/Link";
import Skeleton from "@mui/material/Skeleton";
import { useResponsive } from "../../../hooks/useResponsive";
import { Modal as BaseModal } from '@mui/base/Modal';
import UserProfile from "../../profile/UserProfile";
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, css } from '@mui/system';

export default function MemberCard({
	memberImage = "loadingShimmer",
	memberName = "loadingShimmer",
	memberUsername = "loadingShimmer",
}) {


	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);



	const { isTablet } = useResponsive();

	return (
		<>
			{isTablet ? (
				<Stack gap={2} paddingBottom={2}>
					<div className={style.mobileTeams}>
						{memberImage == "loadingShimmer" ? (
							<Skeleton variant="circular" width={100} height={100} />
						) : (
							<Avatar
								alt={memberName}
								sx={{ width: 100, height: 100 }}
								src={memberImage}
							/>
						)}

						{memberName == "loadingShimmer" ? (
							<Skeleton variant="rectangular" width={210} height={60} />
						) : (
							<Typography
								component={Button}
								padding={0}
								onClick={handleOpen}
								variant="caption"
							>
								{memberName}
							</Typography>
						)}
					</div>
				</Stack>
			) : (
				<Card
					className={cardStyles.memberCard}
					sx={{
						borderRadius: "15px",
						padding: "3rem",
						direction: "column",
						gap: "5px",
						alignItems: "center",
						justifyContent: "center",
						position: "relative",
						minWidth: "300px",
						minHeight: "350px",
					}}
				>
					<Stack
						position={"absolute"}
						height={"fit-content"}
						width={"fit-content"}
						left={20}
						top={20}
					>
						<Typography variant="h6">🎯</Typography>
					</Stack>
					<Stack
						direction={"column"}
						gap={3}
						justifyContent={"center"}
						alignItems={"center"}
					>
						{memberImage == "loadingShimmer" ? (
							<Skeleton variant="circular" width={100} height={100} />
						) : (
							<Avatar
								alt={memberName}
								sx={{ width: 100, height: 100 }}
								src={memberImage}
							/>
						)}

						<Stack
							className={cardStyles.overlay}
							position={"absolute"}
							bottom={0}
							left={0}
							right={0}
							top={"55%"}
							minHeight={"260px"}
							direction={"column"}
						>
							<IconButton
								className={cardStyles.newtab}
								sx={{ position: "absolute", top: "0px", right: "10px" }}
								variant="outlined"
								onClick={handleOpen}
							>
								<OpenInNewIcon style={{ color: "white", fontSize: "20px" }} />
							</IconButton>
							<Stack
								className="overlay-body"
								position={"relative"}
								gap={2}
								marginTop={"1.5rem"}
								alignItems={"center"}
							>
								<Typography
									className={cardStyles.memberName}
									textAlign={"center"}
									variant="body1"
								>
									{memberName}
								</Typography>
								<Typography variant="caption">
									Code and coffee is life!
								</Typography>
								<Stack direction={"row"} gap={2}>
									<IconButton
										className={cardStyles.domainIcon}
										sx={{
											border: "1px solid",
											borderColor: "divider",
											borderRadius: "50%",
										}}
									>
										<LanguageIcon />
									</IconButton>

									<IconButton
										sx={{
											border: "1px solid",
											borderColor: "divider",
											borderRadius: "50%",
										}}
									>
										<AndroidIcon />
									</IconButton>

									<IconButton
										sx={{
											border: "1px solid",
											borderColor: "divider",
											borderRadius: "50%",
										}}
									>
										<SmartToyIcon />
									</IconButton>
								</Stack>
							</Stack>
						</Stack>
					</Stack>

					<Modal
						aria-labelledby="unstyled-modal-title"
						aria-describedby="unstyled-modal-description"
						open={open}
						onClose={handleClose}
						slots={{ backdrop: StyledBackdrop }}
					>
						<ModalContent sx={{ width: "fit-content" }}>
							<UserProfile username={memberUsername} />
						</ModalContent>
					</Modal>
				</Card>
			)}
		</>
	);
}



const Backdrop = React.forwardRef((props, ref) => {
	const { open, className, ...other } = props;
	return (
	  <div
		className={clsx({ 'base-Backdrop-open': open }, className)}
		ref={ref}
		{...other}
	  />
	);
  });
  
  Backdrop.propTypes = {
	className: PropTypes.string.isRequired,
	open: PropTypes.bool,
  };
  
  const blue = {
	200: '#99CCFF',
	300: '#66B2FF',
	400: '#3399FF',
	500: '#007FFF',
	600: '#0072E5',
	700: '#0066CC',
  };
  
  const grey = {
	50: '#F3F6F9',
	100: '#E5EAF2',
	200: '#DAE2ED',
	300: '#C7D0DD',
	400: '#B0B8C4',
	500: '#9DA8B7',
	600: '#6B7A90',
	700: '#434D5B',
	800: '#303740',
	900: '#1C2025',
  };
  
  const Modal = styled(BaseModal)`
	position: fixed;
	z-index: 1300;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
  `;
  
  const StyledBackdrop = styled(Backdrop)`
	z-index: -1;
	position: fixed;
	inset: 0;
	background-color: rgb(0 0 0 / 0.5);
	-webkit-tap-highlight-color: transparent;
  `;
  
  const ModalContent = styled('div')(
	({ theme }) => css`
	  font-family: 'IBM Plex Sans', sans-serif;
	  font-weight: 500;
	  text-align: start;
	  position: relative;
	  display: flex;
	  flex-direction: column;
	  gap: 8px;
	  overflow: hidden;
	  background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
	  border-radius: 8px;
	  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
	  box-shadow: 0 4px 12px
		${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
	  padding: 24px;
	  color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};
  
	  & .modal-title {
		margin: 0;
		line-height: 1.5rem;
		margin-bottom: 8px;
	  }
  
	  & .modal-description {
		margin: 0;
		line-height: 1.5rem;
		font-weight: 400;
		color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
		margin-bottom: 4px;
	  }
	`,
  );
  
  const TriggerButton = styled('button')(
	({ theme }) => css`
	  font-family: 'IBM Plex Sans', sans-serif;
	  font-weight: 600;
	  font-size: 0.875rem;
	  line-height: 1.5;
	  padding: 8px 16px;
	  border-radius: 8px;
	  transition: all 150ms ease;
	  cursor: pointer;
	  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
	  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
	  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
	  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  
	  &:hover {
		background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
		border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
	  }
  
	  &:active {
		background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
	  }
  
	  &:focus-visible {
		box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
		outline: none;
	  }
	`,
  );