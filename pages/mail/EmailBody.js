import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge';

const styles = theme => ({
	root: {
		position: 'relative',
	},
	emailMeta: {
		fontSize: theme.typography.pxToRem(14),
		color: theme.palette.text.secondary,
	},
	metaCon: {
		display: 'flex',
		flexDirection: 'row',
		padding: '0.75rem',
	},
	Attc: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-around',
	},
	emailBody: {
		padding: '0.75rem',
		fontSize: theme.typography.pxToRem(15),
	},
});

const EmailBody = ({ classes }) => {
	return (
		<div className={classes.root}>
			<div
				style={{
					position: 'sticky',
					top: 0,
					zIndex: 100,
					background: '#eee',
				}}>
				<Typography
					style={{
						fontSize: '20px',
						color: 'Black',
						paddingTop: '12px',
						fontWeight: 300,
						textAlign: 'center',
						marginBottom: '12px',
					}}>
					Email Number
				</Typography>
				<Divider style={{ marginBottom: '0.5rem' }} />
			</div>
			<Paper>
				<div className={classes.metaCon}>
					<div style={{ flex: '0 1 30%' }}>
						<Typography className={classes.emailMeta}>
							From: <span style={{ fontWeight: 500 }}>John Doe</span>
						</Typography>
						<Typography className={classes.emailMeta}>
							To: <span style={{ fontWeight: 500 }}>Helen Doe</span>
						</Typography>
						<Typography className={classes.emailMeta}>
							CC: <span style={{ fontWeight: 500 }}>Stacey Doe</span>
						</Typography>
					</div>
					<div>
						<Typography className={classes.emailMeta}>
							Date Sent: <span style={{ fontWeight: 500 }}>22/1/2019</span>
						</Typography>
						<Typography className={classes.emailMeta}>
							Last Opened: <span style={{ fontWeight: 500 }}>22/1/2019</span>
						</Typography>
					</div>
				</div>
				<Divider style={{ marginBottom: '0.5rem' }} />
				<div className={classes.Attc}>
					{[
						['Passsport', 'pdf', '!'],
						['Video', 'mov', '30s'],
						['Picture', 'png', 'HQ'],
					].map((item, i) => {
						return (
							<div>
								<Badge badgeContent={item[2]} color='primary'>
									<img src={`./${item[1]}.png`} />
								</Badge>
								<Typography style={{ textAlign: 'center' }}>
									{item[0]}
								</Typography>
							</div>
						);
					})}
				</div>
				<div className={classes.emailBody}>
					<Typography>
						Hey John,
						<br /> Do quis commodo aliqua reprehenderit ullamco et voluptate
						ullamco. Pariatur labore mollit ad mollit labore. Pariatur commodo
						do cillum dolor voluptate irure in velit irure quis. Officia amet id
						dolor ad cupidatat sit nisi voluptate exercitation irure officia.
						Sit exercitation nisi dolor excepteur. Dolore exercitation ipsum
						consequat enim. Quis esse nostrud et duis non est dolor non ipsum.
						Ad in proident labore amet est aute. Deserunt commodo aliquip mollit
						occaecat sit ea eu dolor cillum est duis veniam. Ipsum non nulla
						nostrud dolor pariatur voluptate duis ex ullamco enim occaecat
						labore officia. Duis pariatur adipisicing esse Lorem ipsum magna
						culpa eiusmod consectetur duis aute et. Minim excepteur cupidatat
						nulla anim fugiat. Cillum aliqua elit eiusmod incididunt tempor sit.
						<br />
						--------------------------------------------------------------
						<br />
						Consectetur sunt laboris labore voluptate non exercitation. Proident
						deserunt tempor culpa occaecat ullamco dolor duis ex ullamco aliqua.
						Esse id dolor Lorem id eiusmod duis anim proident magna labore
						mollit consectetur dolore. Pariatur est consequat minim do labore
						nulla. Voluptate amet do elit proident sit quis ad non. Deserunt
						magna quis ex in nostrud et in quis minim id excepteur veniam ut.
						Esse non ullamco eu id nisi incididunt. Consectetur eu reprehenderit
						amet eiusmod magna labore cupidatat mollit officia eu. Occaecat do
						consequat anim reprehenderit incididunt dolore commodo velit nulla
						nostrud adipisicing aliqua ea do. Amet quis amet minim nostrud
						consequat magna tempor. Ex aute cupidatat nostrud sunt duis magna.
					</Typography>
				</div>
			</Paper>
		</div>
	);
};

export default withStyles(styles)(EmailBody);
