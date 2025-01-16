--drop table dbo.AllStuffies
GO
CREATE TABLE [dbo].[AllStuffies](
	[AllStuffiesID] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](25) NOT NULL,
	[LastName] [varchar](25) NULL,
	[DOB] [date] NULL,
	[Animal_Type] [varchar](25) NULL,
	[Bio] [varchar](500) NULL,
	[Address1] [int] NULL,
	[Address2] [int] NULL,
	[Street] [varchar](50) NULL,
	[City] [varchar](25) NULL,
	[State] [varchar](15) NULL,
	[ZIP] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AllStuffies] ADD  CONSTRAINT [PK_AllStuffies] PRIMARY KEY CLUSTERED 
(
	[AllStuffiesID] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
